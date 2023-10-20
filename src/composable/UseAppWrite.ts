import { Client,ID, Account, Databases,Query} from 'appwrite';
import {ref} from 'vue';

const accountRef =ref<Account>();
const databaseRef =ref<Databases>();
const queryRef =ref<Query>();

export const useAppWrite = ()=>{
    // console.log(import.meta.env.VITE_APPWRITE);
    const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE)
    .setProject(import.meta.env.VITE_APPWRITE_ID);

    accountRef.value = new Account(client);
    databaseRef.value = new Databases(client);
    queryRef.value =  new Query();

    return {
        account:accountRef,
        database:databaseRef,
        query:Query,
        ID:ID,
        CONFIG:{
            DATABASE_ID:import.meta.env.VITE_DATABASE_ID,
            // COLLECTION_ID:import.meta.env.VITE_COLLECTION_ID
        }
    }

}
