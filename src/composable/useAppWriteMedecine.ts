import { useAppWrite } from "./UseAppWrite";
import { ref } from 'vue';
import moment from 'moment';

const userMedicationCollection =  ref("65459803e6ce27e90794");
const userTakenMedicationCollection =  ref("65ae69f9e8e3ea60de92");
const currentDate = ref(moment(new Date()).format('MM-DD-YYYY'));
const currentFormatDate = ref(moment(new Date()).format('MM/DD/YYYY'));
var date = ref(new Date(Date.now()))
const currentDateTime = ref(moment(new Date()).format());

export const useAppWriteMedication = ()=>{

    const {account,ID,CONFIG,database,query} = useAppWrite();
    /**
     * 
     * @param itemdData   
     * @returns 
     */
    const inputMedication = async (name:String,volume:String,schedule:String)=>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const response = await database.value?.createDocument(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                ID.unique(),
                { 
                    "name":name,
                    "volume": volume,
                    "schedule": schedule,
                    "user_id":accountId
                }
            );
            if(response?.error) throw response.error

            return {data:response, error:undefined};
            
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const takeMedecine = async (id:string,schedule:string)=>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const check = await checkBeforeTake(id);
            console.log(check);
            var response =null;
            var update =  null;
            var times_taken = check.data?.times_taken;
            if( times_taken > 0){
                 response = await database.value?.updateDocument(
                    CONFIG.DATABASE_ID,
                    userTakenMedicationCollection.value,
                    check.data?.$id??"",
                    { 
                        "times_taken" : times_taken+1,
                    }
                );

                update = await updateTimesTakenOfMedecine(id,times_taken+1);
            }else{
                response = await database.value?.createDocument(
                    CONFIG.DATABASE_ID,
                    userTakenMedicationCollection.value,
                    ID.unique(),
                    { 
                        "user_id":accountId,
                        "medication_id": id,
                        "schedule": schedule,
                        "date_taken":currentFormatDate.value,
                        "times_taken":1
                    }
                );
                update = await updateTimesTakenOfMedecine(id,1);
                if(response?.error) throw response.error
            }
            if(update){
                return {data:response, error:false};
            }else{
                return {data:null, error:true};
            }
            
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const updateTimesTakenOfMedecine = async(medId:string, timesTaken:number) =>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const  response = await database.value?.updateDocument(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                medId,
                { 
                    "taken_times" : timesTaken,
                    "last_datetime_taken":currentFormatDate.value
                }
            );

            if(response?.error) throw response.error

            return response;
        } catch (error) {
            return {error, data:undefined}
        }
    }
    
    const checkBeforeTake = async(medId:string) =>{
        try{

            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userTakenMedicationCollection.value,
                [
                     query.equal('user_id',accountId??""),
                     query.equal('medication_id',medId??""),
                     query.equal('date_taken',currentFormatDate.value)
                ]
            ); 
            console.log(header)
           

            return {data:header?.documents.findLast(d=>d), error:undefined};
        }catch(error){
            return {error, data:null}
        }
    }

    const check= async(medId:string) =>{
        try{

            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userTakenMedicationCollection.value,
                [
                     query.equal('user_id',accountId??""),
                     query.equal('medication_id',medId??""),
                     query.equal('date_taken',currentFormatDate.value)
                ]
            ); 
            console.log(header)

            return {data:header?.documents, error:undefined};
        }catch(error){
            return {error, data:[]}
        }
    }

    const getAllMedecineBySchedule = async(schedule:string)=>{
        try{

            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                [
                     query.equal('schedule',schedule),
                     query.equal('user_id',accountId??""),

                ]
            ); 

            return {data:header, error:undefined};
        }catch(error){
            return {error, data:undefined}
        }
    }

    const getAllMedecines = async()=>{
        try{

            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                [
                     query.equal('user_id',accountId??"")
                ]
            );
            // header?.documents.forEach(async data=>{
            //         var res = await check(data.$id);
            //         data.time_taken =res?.data?.length;
            //         data.last_taken =res?.data?.findLast((element) => element)?.$createdAt;
            //         return data;
            //     })
            return {data:header?.documents, error:undefined};
        }catch(error){
            return {error, data:[]}
        }
    }

    const  deleteMedecine = async(medId:string) =>{
        try{
            const promise = await database.value?.deleteDocument(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                medId
                );

        return {data:promise, error:false};

        }catch(error){
            return {error, data:[]}
        }

    }


    return {
        inputMedication,
        getAllMedecineBySchedule,
        getAllMedecines,
        takeMedecine,
        checkBeforeTake,
        check,
        deleteMedecine
    }
}

async function randomWait() {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 100)));
    return;
}