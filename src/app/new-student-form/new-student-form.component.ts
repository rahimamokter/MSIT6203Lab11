import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-student-form',
  templateUrl: './new-student-form.component.html',
  styleUrls: ['./new-student-form.component.css']
})
export class NewStudentFormComponent implements OnInit {
  constructor(private studentService: StudentService, private router: Router){ }
  ngOnInit(){  
  this.router.navigate(['/addStudent']);
  }

  onSubmit(){ 
    console.log("You submitted: " +  this.firstName + " " +  this.lastName + " "+ this.email );
  this.router.navigate(['/listStudents']);

 }

  minCharacterLength: number = 2;
  firstNameHint: string = '*Enter first name'
  lastNameHint: string = '*Enter last name'
  emailHint: string = '*Enter your email'
  phoneNumberHint: string = '*Enter your phone number'
  majorHint: string = 'Enter your major '
  creditEarnedHint: string = 'Enter your earned credit hours'
  interestHint: string = 'Please enter your interested field'
  introHint: string = 'Tell us about yourself'
  

  @Input() firstName: string = "";
  @Input() lastName: string = "";
  @Input() email: string = "";
  @Input() phoneNumber: string = "";
  @Input() major: string = "";
  @Input() creditEarned: string = "";
  @Input() interest: string = "";
  @Input() selfIntro: string = "";

  logName(x) {
    console.log("Value you entered: " + x);
  }

  logComment(x) {
    this.logName(x);
  }

  onClick() {
    this.studentService.addStudent(this.firstName, this.lastName, this.email, 
                                    this.phoneNumber,this.major, 
                                    this.creditEarned, this.interest, this.selfIntro);
    console.log("You entered below info > " + "\nFirst Name: " + this.firstName 
                                          + "\nLast Name: "+ this.lastName + "\nEmail: "+ this.email 
                                          +"\nPhone Number: "+ this.phoneNumber+ "\nMajor: "+this.major 
                                          +"\nCredit Earned: "+ this.creditEarned +"\nInterested Field: "+ this.interest 
                                          +"\nSelf Intro: "+ this.selfIntro);
  }

}

