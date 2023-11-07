import { useAppWrite } from "./UseAppWrite";
import { ref } from 'vue';
import moment from 'moment';

const userMedicationCollection =  ref("65459803e6ce27e90794");
const currentDate = ref(moment(new Date()).format('MM-DD-YYYY'));
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


    return {
        inputMedication,
        getAllMedecineBySchedule
    }
}

async function randomWait() {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 100)));
    return;
}