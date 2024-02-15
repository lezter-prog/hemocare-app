import XLSX from 'xlsx';
import moment from 'moment';
import {useAppwiteFluid} from './useAppWriteFluid';

/* load 'fs' for readFile and writeFile support */
// import * as fs from 'fs';
// XLSX.set_fs(fs);

// /* load 'stream' for stream support */
// import { Readable } from 'stream';
// XLSX.stream.set_readable(Readable);

// /* load the codepage support library for extended support with older formats  */
// import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
// XLSX.set_cptable(cpexcel);
const {getValueByDate, getValueByUser} = useAppwiteFluid();

export const XLSWriter = async () => {

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
    const users =  result.users;
    var arrangedData: any = [];
    
    var header = ["Name"];
    var dates: Array<String> = [];
    for (var i=6; i>0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        var momentDate =  moment(d).format('MM-DD-YYYY');
        dates.push(momentDate)
        header.push(momentDate);
    }
    
        console.log(dates);
    users.forEach(async (user,key)=>{
        var newUser = new Object();
        newUser.name=user.name;
        
        getValueByUser(user.$id)
        .then(fluids=>{

             fluids.filter(data =>dates.includes(data.date_entry));
                for (const date of dates){
                    fluids.forEach(f => {
                        if(date == f.date_entry){
                            newUser[date] = f.total_fluid_taken_ml+' ml';
                        }else{
                            newUser[date] = "";
                        }
                    });
                
                }
               
                
                arrangedData.push(newUser);
        });
        
        if(key == (users.length - 1)){
            setTimeout(()=>{
                
                console.log(arrangedData);
                console.log(JSON.stringify(arrangedData));
                var json = JSON.parse(JSON.stringify(arrangedData));
                console.log(json);
                console.log("youre at last")
                const worksheet = XLSX.utils.json_to_sheet(json);
    
                    const workbook = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(workbook, worksheet, "users");
    
    
                
    
                
    
                    /* fix headers */
                    XLSX.utils.sheet_add_aoa(worksheet, [header], { origin: "A1" });
    
                    /* calculate column width */
                    // worksheet["!cols"] = [ { wch: } ];
    
                    XLSX.writeFile(workbook, "UsersFluidIntake_"+moment(new Date()).format('MMDDYYYY')+".xlsx", { compression: true });
    
            }, 3000)
            
           
        }
        
    })

    
    
    
    
}