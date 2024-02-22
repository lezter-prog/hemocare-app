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
    const inputMedication = async (name:String,volume:String,schedule:String, medecineType:string)=>{
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
                    "user_id":accountId,
                    "medecine_type":medecineType
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
            console.log(schedule);
            var response =null;
            var update =  null;
            var found = check.data?.findLast(data=>data);
            if( check.data?.length > 0){
               if(schedule == "onceADay" && found?.times_taken >=1){
                    response =false;
                }else if(schedule == "twiceADay" && found?.times_taken >=2){
                    response =false;
                }else if(schedule == "everyFourHours" && found?.times_taken >=6){
                    response =false;
                }else if(schedule == "everySixHours" && found?.times_taken >=4){
                    response =false;
                }else{
                  if(schedule != "" && found?.times_taken >=1){
                    response =false;
                  }else{
                    response = await database.value?.updateDocument(
                        CONFIG.DATABASE_ID,
                        userTakenMedicationCollection.value,
                        found?.$id??"",
                        { 
                            "times_taken" : found?.times_taken+1,
                        }
                    );
                    update = await updateTimesTakenOfMedecine(id,found?.times_taken+1);
                  }
                } 
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
            console.log(response);
            return {data:response, error:"Reached Maximum Take count today"};
           
        } catch (error) {
            return {error, data:undefined}
        }
    }
     const getTakeCount = async(medId:string)=>{
        try{
            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userTakenMedicationCollection.value,
                [
                     query.equal('user_id',accountId??""),
                     query.equal('medication_id',medId),
                     query.equal('date_taken',currentFormatDate.value)
                ]
            ); 
            const data = header?.documents==undefined?[]:header?.documents;
           

            return {data:data, error:undefined};
        }catch(error){
            return {error, data:null}
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
            console.log(currentFormatDate.value)
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
            return {error, data:null}
        }
    }

    const checkById = async(medId:string) =>{
        try{
            console.log(currentFormatDate.value)
            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userTakenMedicationCollection.value,
                [
                     query.equal('user_id',accountId??""),
                     query.equal('medication_id',medId??""),
                ]
            ); 
            console.log(header)
           

            return {data:header?.documents, error:undefined};
        }catch(error){
            return {error, data:null}
        }
    }

    const check= async(medId:string) =>{
        try{
            console.log(currentFormatDate.value);
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

             header?.documents.forEach(async data=>{
                         const found = await getTakeCount(data.$id);
                            const d =  found.data;
                            const med  =  d?.findLast(data=>data);
                            data.times_taken =med?.times_taken
                        return data;
                    })

            return {
                data:header?.documents
            }
            
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

    const getLast7DaysById = async (id:string)=>{
       
        try {
            var result = {
                "dates":new Array(),
                "value":new Array()
            };

            var dates: Array<String> = [];
            for (var i=6; i>0; i--) {
                var d = new Date();
                d.setDate(d.getDate() - i);
                var momentDate =  moment(d).format('MM/DD/YYYY');
                dates.push(momentDate)
            }

            var newMedecine =  new Array();

            const medecines = await getValueByUser(id);
            dates.forEach(async (date,key)=>{
                var obj =  new Object();
                obj.date =date; 
                var arr = new Array();
                medecines.filter(data =>dates.includes(data.date_entry));
                medecines.forEach(async m =>{
                    if(date == m.date_taken){
                       const med = await getValueById(m.medication_id);
                       console.log(med);
                        arr.push(med.name);
                    }
                   
                })
                obj.medecine = arr;
                newMedecine.push(obj);

                if(key == (dates.length-1)){
                    
                }
            })

            
            
            console.log(newMedecine);
           
            return {newMedecine, error:undefined};
            
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const getValueByUser = async (id:string)=>{
        try {
            
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                userTakenMedicationCollection.value,
                [
                     query.equal('user_id',id),
                ]
            ); 
            return header?.documents;
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const getValueById = async (id:string)=>{
        try {
            
            const header = await database.value?.getDocument(
                CONFIG.DATABASE_ID,
                userMedicationCollection.value,
                id
            ); 
            console.log(header)
            return header;
        } catch (error) {
            return {error, data:undefined}
        }
    }

    // const undefinedChecker = (data:Doc[]|undefined)=>{
    //         if(data == undefined){
    //             return null;
    //         }else{
    //             return data;
    //         }
    // }


    return {
        inputMedication,
        getAllMedecineBySchedule,
        getAllMedecines,
        takeMedecine,
        checkBeforeTake,
        check,
        deleteMedecine,
        getValueByUser,
        getLast7DaysById,
        getTakeCount
    }
}

async function randomWait() {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 100)));
    return;
}