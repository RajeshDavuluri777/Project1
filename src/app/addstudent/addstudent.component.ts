import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentservice:StudentserviceService) { }
  confirmationString:string="New Student has been added";
  isAdded:boolean=false;
 student:any="";
 addstudentfromapi(student){
  this.studentservice.addnewstudent(student).subscribe((data)=>{
    this.isAdded=true;
    
  })
}

  ngOnInit(): void {
  }

}
