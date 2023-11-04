import { FCM } from "@capacitor-community/fcm";
import { PushNotifications } from "@capacitor/push-notifications";


export const FireBase = ()=>{
    

    const getToken = async ()=>{
        await PushNotifications.requestPermissions();
        await PushNotifications.register();

       const token = await FCM.getToken()
        .then((r) => {
            // alert(`Token ${r.token}`)
            return r.token;
        })
        .catch((err) => console.log(err));
        return token
    }

    return {
        getToken
    }
}


