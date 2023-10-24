import { useAppWrite } from "./UseAppWrite";
import { ref } from 'vue';
import moment from 'moment';

const monitorFluidHeaderCollection =  ref("652027ced30202c978f2");
const monitorFluidDetailsCollection =  ref("652028c3294e6900566b");
const currentDate = ref(moment(new Date()).format('MM-DD-YYYY'));
const currentDateTime = ref(moment(new Date()).format());

export const useAppwiteFluid = ()=>{

    const {account,ID,CONFIG,database,query} = useAppWrite();
    /**
     * 
     * @param itemdData   
     * @returns 
     */
    const inputFluid = async ()=>{
        try {
            const checkResponse =  (await checkTodaysEntry())?.data;

            if(checkResponse?.total??0 >0){
                const documentId = checkResponse?.documents[0].$id;
                const response = await database.value?.createDocument(
                    CONFIG.DATABASE_ID,
                    monitorFluidDetailsCollection.value,
                    ID.unique(),
                    { 
                        "fluid_header_id":documentId,
                        "datetime_taken": currentDateTime.value,
                        "liquid_taken":250
                    }
                );
                const updateHeader = await database.value?.updateDocument(
                    CONFIG.DATABASE_ID,
                    monitorFluidHeaderCollection.value,
                    documentId??"",
                    { 
                        "total_fluid_taken_ml":(checkResponse?.documents[0].total_fluid_taken_ml+250)
                    }
                );
                return {data:response, error:undefined};

            }

            

            return {data:checkResponse, error:undefined};
            
        } catch (error) {
            return {error, data:undefined}
        }
    }


    const reduceFluid = async ()=>{
        try {
            const checkResponse =  (await checkTodaysEntry())?.data;
            const fluid_header_id = checkResponse?.documents[0].$id;
        
            const response = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                monitorFluidDetailsCollection.value,
            );

            const documentId =response?.documents.findLast(doc=>doc);

            const promise = database.value?.deleteDocument(
                CONFIG.DATABASE_ID,
                monitorFluidDetailsCollection.value,
                documentId?.$id??""
                );

            const updateHeader = await database.value?.updateDocument(
                CONFIG.DATABASE_ID,
                monitorFluidHeaderCollection.value,
                fluid_header_id??"",
                { 
                    "total_fluid_taken_ml":(checkResponse?.documents[0].total_fluid_taken_ml-250)
                }
            );

            return {data:promise, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const checkTodaysEntry = async ()=>{
        try {
            const accountId = (await account.value?.get())?.$id;
            const isExist = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                monitorFluidHeaderCollection.value,
                [
                     query.equal('date_entry', currentDate.value)
                ]
            );

            if(isExist?.total ==0){
                const response = await database.value?.createDocument(
                    CONFIG.DATABASE_ID,
                    monitorFluidHeaderCollection.value,
                    ID.unique(),
                    { 
                        "date_entry": currentDate.value,
                        "id_user": accountId,
                        "total_fluid_taken_ml":0
                    }
                );
                if(response?.error) throw response.error
            }
            return {data:isExist, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const getLast7Days = async ()=>{
       
        try {
            var result = {
                "dates":new Array(),
                "value":new Array()
            };
            for(var i=6; i>0; i--) {
                await randomWait();
                console.log( "sample"+i);
                var d = new Date();
                d.setDate(d.getDate() - i);
                var momentDate =  moment(d).format('MMM-DD-YYY');
                result.dates.push(momentDate)
                const header= await getValueByDate(d);
                result.value.push(header.data?.documents[0]?.total_fluid_taken_ml);
            }
            console.log(result);
            return {data:result, error:undefined};
            
        } catch (error) {
            return {error, data:undefined}
        }
    }

     const getValueByDate = async (date:Date)=>{
        try {
           
            const header = await database.value?.listDocuments(
                CONFIG.DATABASE_ID,
                monitorFluidHeaderCollection.value,
                [
                     query.equal('date_entry',moment(date).format('MM-DD-YYYY'))
                ]
            ); 
            return {data:header, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    return {
        inputFluid,
        reduceFluid,
        checkTodaysEntry,
        getLast7Days,
        getValueByDate
    }
}

async function randomWait() {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 100)));
    return;
}