import { useAppWrite } from "./UseAppWrite";
import { useAppwiteFluid } from "./useAppWriteFluid";


export const useAppWriteAccount = ()=>{

    const {account,ID,CONFIG} = useAppWrite();
    const { getLast7DaysById,getValueByDate } = useAppwiteFluid();
    
    /**
     * 
     * @param itemdData   
     * @returns 
     */
    const createAccount = async (email:string, password:string, name:string)=>{
        try {
            const response = await account.value?.create(
                ID.unique(),
                email,
                password,
                name
            )
            return {data:response, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }

    const login = async (email:string, password:string)=>{
        try {
            const promise = await account.value?.createEmailSession(email, password);
            return {data:promise, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
    }
    
    const accountSession =async () => {
        try {
            const promise = await account.value?.get();
            return {data:promise, error:undefined};
        } catch (error) {
            return {error, data:undefined}
        }
        
    }

    const getAllUsers =async () => {
        
        try {
            const promise = await fetch("https://cloud.appwrite.io/v1/users",{
                headers:{
                    "Host":"localhost",
                    "Content-Type": "application/json",
                    "X-Appwrite-Response-Format":"1.4.0",
                    "X-Appwrite-Project":"650d8303da6c773bca96",
                    "X-Appwrite-Key":"05fa519057dede42cf669073a47add46fec4ad6ae362a7527ce6dcc507361721282e5c85f8182af9c7d73374ec084bf2c371c9f00d1bcbe79a04c0017f54ca2ef3c6d160a9cce55e70999d5f12141af168e524107435bc09e001ed433125d85ce028fa9d905b91799c697a20929b41d42c8ac2518d74e053a582010e72d87a55"
                }
            })
            const result =  await promise.json();
            //  result.users.forEach(async user => {
            //     if(user.name != "Admin"){
                    
            //         const fluids = await getValueByDate(new Date(),user.$id);
            //         user.sevenDaysFluid = fluids.data;
            //         console.log(fluids);
            //         return user;
            //     }
            // });
            return result.users;
            // console.log(res);

            
            
        } catch (error) {
            return {error, data:undefined}
        }
        
    }

    return {
        createAccount,
        login,
        accountSession,
        getAllUsers
    }
}