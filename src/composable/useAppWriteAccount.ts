import { useAppWrite } from "./UseAppWrite";

export const useAppWriteAccount = ()=>{

    const {account,ID,CONFIG} = useAppWrite();
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

    return {
        createAccount,
        login,
        accountSession
    }
}