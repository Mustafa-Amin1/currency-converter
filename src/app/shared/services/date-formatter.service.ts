import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor() { }

  //convert date format from 25/09/1994 to 25-09-1994
   dateFormat(inputDate:any, format:any) {
    //parse the input date
    if(inputDate) {
        const date = new Date(inputDate);

        //extract the parts of the date
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();    
        //replace the month
        format = format.replace("mm", month.toString().padStart(2,"0"));        
    
        //replace the year
        if (format.indexOf("yyyy") > -1) {
            format = format.replace("yyyy", year.toString());
        } else if (format.indexOf("yy") > -1) {
            format = format.replace("yy", year.toString().substr(2,2));
        }
    
        //replace the day
        format = format.replace("dd", day.toString().padStart(2,"0")?day.toString().padStart(2,"0"):'');
      
        return format;
    } else {
        return ''
    }
}
}
