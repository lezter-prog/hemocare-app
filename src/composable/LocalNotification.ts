import { LocalNotifications } from '@capacitor/local-notifications';

export const localNotif = () => {
    const requestPermission = async () => {
        await LocalNotifications.requestPermissions();
    }

    const registerActionTypes = async (id:any) => {
        await LocalNotifications.registerActionTypes({
            types: [
              {
                id: id,
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
                ]
              }
            ]
          });
        
    }
    const notify =async (title:any,body:any) => {
       await requestPermission();
      
        LocalNotifications.schedule({
            notifications: [
              {
                id: 1,
                title: title,
                body: body,
              }
            ]
          });
        
    }
    const schedule =async (title:any,body:any, schedule:any) => {
     await requestPermission();
      var actionType ="1";
      await registerActionTypes(actionType);

      LocalNotifications.schedule({
          notifications: [
            {
              id: 2,
              title: title,
              body: body,
              actionTypeId:actionType ,
              schedule: {
                on: {
                  minute:0
                }
              }
            },
            
          ]
        });
      
  }
  const onceAday = async (medecine:any,schedule:string)=>{
    await requestPermission();
    var actionType ="medecine";
    var sched = schedule.split(":");
    let randomId = Math.floor(Math.random() * 10000) + 1;
  
    await registerActionTypes(medecine.$id);
    LocalNotifications.schedule({
        notifications: [
          {
            id: randomId,
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecine?.name,
            actionTypeId: actionType,
            schedule: { 
              allowWhileIdle: true,
              on: {
                hour:parseFloat(sched[0]),
                minute:parseFloat(sched[1])
              }
            }
          },
          
        ]
      });
    
  }
  const everyFourHours = async (medecine:any)=>{
    await requestPermission();
    sixAMNotify(medecine);
    TenAMNotify(medecine);
    twoPMNotify(medecine);
    sixPMNotify(medecine);
    tenPMNotify(medecine);
    twelveAMNotify(medecine);
  }

  // from 6am-12pm-6pm-12am,

    const everySixHours = async (medecine:any)=>{
      await requestPermission();
        sixAMNotify(medecine);
        twelvePMNotify(medecine);
        sixPMNotify(medecine);
        twelveAMNotify(medecine);
    }
    const twiceADay = async(medecine:any)=>{
      await requestPermission();
      eightAMNotify(medecine);
      eightPMNotify(medecine);
  }
  const eightAMNotify = async(medecine:any)=>{
      
    var actionType ="medecine";
    var medecines ="";
    // medecine.forEach(med =>{
    //   medecines = (medecines !="")?medecines+med:medecines+", "+med;
    // });
  
    await registerActionTypes(medecine.$id+"eightAM");
    LocalNotifications.schedule({
        notifications: [
          {
            id: 8,
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecine?.name,
            actionTypeId: actionType,
            schedule: {
              allowWhileIdle: true,
              on: {
                hour:8,
                minute:0
              }
            }
          },
          
        ]
      });
  }
  const eightPMNotify = (medecine:any)=>{
      
    var actionType ="medecine";
    var medecines ="";
    // medecine.forEach(med =>{
    //   medecines = (medecines !="")?medecines+med:medecines+", "+med;
    // });
  
   
    LocalNotifications.schedule({
        notifications: [
          {
            id: 20,
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecine?.name,
            actionTypeId: actionType,
            schedule: {
              allowWhileIdle: true,
              on: {
                hour:20,
                minute:0
              }
            }
          },
          
        ]
      });
  }

    const sixAMNotify = (medecine:any)=>{
      
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+", "+med;
      // });
    
      LocalNotifications.schedule({
          notifications: [
            {
              id: 6,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const twelvePMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
      
      LocalNotifications.schedule({
          notifications: [
            {
              id: 12,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:12,
                  minute:0
                }
              }
            },
            
          ]
        });
    }
    const sixPMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
     
      LocalNotifications.schedule({
          notifications: [
            {
              id: 18,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:18,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const twelveAMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
    
      LocalNotifications.schedule({
          notifications: [
            {
              id: 24,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:0,
                  minute:0
                }
              }
            },
          ]
        });
    }

    //  6am-10am-2pm-6pm-10pm-2am

    const twoPMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
     
      LocalNotifications.schedule({
          notifications: [
            {
              id: 14,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:14,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const TenAMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
     
      LocalNotifications.schedule({
          notifications: [
            {
              id: 10,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:10,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const tenPMNotify = (medecine:any)=>{
      var actionType ="medecine";
      var medecines ="";
      // medecine.forEach(med =>{
      //   medecines = (medecines !="")?medecines+med:medecines+","+med;
      // });
    
      LocalNotifications.schedule({
          notifications: [
            {
              id: 22,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecine?.name,
              actionTypeId: actionType,
              schedule: {
                allowWhileIdle: true,
                on: {
                  hour:22,
                  minute:0
                }
              }
            }
          ]
        });
    }

    const getPending = async () => {
      return await LocalNotifications.getPending();
    }
    return{
         notify,
         schedule,
         onceAday,
         everyFourHours,
         everySixHours,
         twiceADay,
         getPending
    }
    
}


 