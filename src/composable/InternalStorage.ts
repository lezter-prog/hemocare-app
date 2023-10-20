import { Storage } from '@ionic/storage';
import {ref} from 'vue';

const storage =  new Storage();
storage.create();


export const useInternalStorage = ()=>{

    const saveUsersInfo = async (name:String,age:Number,contactNumber:Number,email:String) => {
        let userInfo ={
            name:name,
            age:age,
            email:email,
            contactNumber:contactNumber
        };
        return storage.set("usersInfo",userInfo);
    }

    return {
        saveUsersInfo
    }

}