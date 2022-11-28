import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
  pname=""
  pid =""
  address=""
  contactno=""
  dateofappointment=""
  pimage=""
  doctorname=""

  entryFunction=()=>
  {
    let data:any={
      "pname":this.pname,
      "pid":this.pid,
      "address":this.address,
      "contactno":this.contactno,
      "dateofappointment":this.dateofappointment,
      "piamge":this.pimage,
      "doctorname":this.doctorname
    }
      console.log(data)
  }


}
