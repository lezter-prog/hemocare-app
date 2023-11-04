import { LocalNotifications } from '@capacitor/local-notifications';

export const localNotif = () => {
    const requestPermission = async () => {
        await LocalNotifications.requestPermissions();
    }

    const registerActionTypes = async () => {
        await LocalNotifications.registerActionTypes({
            types: [
              {
                id: 'your_choice',
                actions: [
                  {
                    id: 'dismiss',
                    title: 'Dismiss',
                    destructive: true
                  },
                  {
                    id: 'open',
                    title: 'Open app'
                  },
                  {
                    id: 'respond',
                    title: 'Respond',
                    input: true
                  }
                ]
              }
            ]
          });
        
    }
    const notify =async () => {
        requestPermission();
        registerActionTypes();

        LocalNotifications.schedule({
            notifications: [
              {
                id: 1,
                title: 'Sample title',
                body: 'Sample body',
                actionTypeId: 'your_choice'
              }
            ]
          });
        
    }
    return{
         notify
    }
    
}


 