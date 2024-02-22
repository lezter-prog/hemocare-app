import { useAppWrite } from "./UseAppWrite";
import { ref } from 'vue';
import moment from 'moment';

const scheduleTableId =  ref("65d41a47e37ce56e2b65");
const currentDate = ref(moment(new Date()).format('MM-DD-YYYY'));
const currentDateTime = ref(moment(new Date()).format());

export const useAppWriteSchedule = ()=>{

    const {account,ID,CONFIG,database,query} = useAppWrite();
    /**
     * 
     * @param itemdData   
     * @returns 
     */
    const inputSchedule = async (scheduleDate: String[],time:string,description:string, type:string)=>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const checkResponse =  (await checkIfExist(scheduleDate))?.data;
            console.log(checkResponse);
            if(checkResponse?.total ==0){
                const response = await database.value?.createDocument(
                    CONFIG.DATABASE_ID,
                    scheduleTableId.value,
                    ID.unique(),
                    { 
                        "user_id":accountId,
                        "schedule": scheduleDate,
                        "description":description,
                        "type": type,
                        "time":  time,
                        "status":"ACTIVE"
                    }
                );
                return {data:response, error:undefined};

            }else{
                return {data:undefined, message:"Already Exist"};
            }
        } catch (error) {
            return {
                message:(error as Error).message, 
                data:undefined
            }
        }
    }


   
    const checkIfExist= async (datetime:String[])=>{
        var array:any[] = datetime;
        console.log(array)
        try {
            const accountId = (await account.value?.get())?.$id;
            const isExist = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                scheduleTableId.value,
                [ 
                    query.equal('user_id',accountId??""),
                    query.equal('schedule',array)
             ]
            );
           

            
            return {data:isExist, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    
    const getAllByUser= async ()=>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                scheduleTableId.value,
                [
                     query.equal('user_id',accountId??""),
                     query.equal('status',"ACTIVE"),

                ]
            ); 
            return {data:header?.documents, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const  deleteSched= async(scheduleId:string) =>{
        try{
            const promise = await database.value?.deleteDocument(
                CONFIG.DATABASE_ID,
                scheduleTableId.value,
                scheduleId
                );

        return {data:promise, error:false};

        }catch(error){
            return {error, data:[]}
        }   

    }

    const  Attended= async(scheduleId:string) =>{
        try{
            const promise = await database.value?.updateDocument(
                CONFIG.DATABASE_ID,
                scheduleTableId.value,
                scheduleId,
                { 
                    "status":"DONE"
                }
                );

        return {data:promise, error:false};

        }catch(error){
            return {error, data:[]}
        }   

    }
    const getAllByUserAllStatus= async (id:string)=>{
        try {
           
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                scheduleTableId.value,
                [
                     query.equal('user_id',id),

                ]
            ); 
            return {data:header?.documents, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }
   
    return {
        getAllByUser,
        inputSchedule,
        deleteSched,
        Attended,
        getAllByUserAllStatus
    }
}

async function randomWait() {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 100)));
    return;
}