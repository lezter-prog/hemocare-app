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
      requestPermission();
      var actionType ="1";
      registerActionTypes(actionType);

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
  const onceAday = async (medecine:Array<String>,schedule:string)=>{
    requestPermission();
    var actionType ="medecine";
    var medecines ="";
    medecine.forEach(med =>{
      medecines = (medecines !="")?medecines+med:medecines+", "+med;
    });
    var sched = schedule.split(":");
  
    registerActionTypes(actionType);
    LocalNotifications.schedule({
        notifications: [
          {
            id: parseFloat(sched[0]),
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecines,
            actionTypeId: actionType,
            schedule: {
              on: {
                hour:parseFloat(sched[0]),
                minute:parseFloat(sched[1])
              }
            }
          },
          
        ]
      });
    
  }
  const everyFourHours = async (medecine:Array<String>)=>{
    requestPermission();
    sixAMNotify(medecine);
    TenAMNotify(medecine);
    twoPMNotify(medecine);
    sixPMNotify(medecine);
    tenPMNotify(medecine);
    twelveAMNotify(medecine);
  }

  // from 6am-12pm-6pm-12am,

    const everySixHours = async (medecine:Array<String>)=>{
        requestPermission();
        sixAMNotify(medecine);
        twelvePMNotify(medecine);
        sixPMNotify(medecine);
        twelveAMNotify(medecine);
    }
    const twiceADay = async(medecine:Array<String>)=>{
      requestPermission();
      eightAMNotify(medecine);
      eightPMNotify(medecine);
  }
  const eightAMNotify = (medecine:Array<String>)=>{
      
    var actionType ="medecine";
    var medecines ="";
    medecine.forEach(med =>{
      medecines = (medecines !="")?medecines+med:medecines+", "+med;
    });
  
    registerActionTypes(actionType);
    LocalNotifications.schedule({
        notifications: [
          {
            id: 8,
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecines,
            actionTypeId: actionType,
            schedule: {
              on: {
                hour:6,
                minute:0
              }
            }
          },
          
        ]
      });
  }
  const eightPMNotify = (medecine:Array<String>)=>{
      
    var actionType ="medecine";
    var medecines ="";
    medecine.forEach(med =>{
      medecines = (medecines !="")?medecines+med:medecines+", "+med;
    });
  
    registerActionTypes(actionType);
    LocalNotifications.schedule({
        notifications: [
          {
            id: 20,
            title: "Take your medicine",
            body: "You have a Schedule to take "+medecines,
            actionTypeId: actionType,
            schedule: {
              on: {
                hour:6,
                minute:0
              }
            }
          },
          
        ]
      });
  }

    const sixAMNotify = (medecine:Array<String>)=>{
      
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+", "+med;
      });
    
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 6,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const twelvePMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 12,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }
    const sixPMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 18,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const twelveAMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 24,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    //  6am-10am-2pm-6pm-10pm-2am

    const twoPMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 14,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const TenAMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 10,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    const tenPMNotify = (medecine:Array<String>)=>{
      var actionType ="medecine";
      var medecines ="";
      medecine.forEach(med =>{
        medecines = (medecines !="")?medecines+med:medecines+","+med;
      });
      registerActionTypes(actionType);
      LocalNotifications.schedule({
          notifications: [
            {
              id: 14,
              title: "Take your medicine",
              body: "You have a Schedule to take "+medecines,
              actionTypeId: actionType,
              schedule: {
                on: {
                  hour:6,
                  minute:0
                }
              }
            },
            
          ]
        });
    }

    return{
         notify,
         schedule,
         onceAday,
         everyFourHours,
         everySixHours,
         twiceADay
    }
    
}


 