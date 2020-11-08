import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
// we know that http response will be in JSON format.

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class StudentService {
  [x: string]: any;
  private geturl = "http://localhost:8000/students";
  constructor(private http: HttpClient) {}

  // Uses http.get() to load data.
  getStudents() {
    return this.http.get(this.geturl);
  }

  addStudent(firstName: string, lastName: string, email: string, 
            phoneNumber: string, specialization: string, education: string, 
            interest: string, selfIntro: string) {
    this.http
      .post(this.geturl, { firstName, lastName, email, phoneNumber, specialization, education, interest, selfIntro })
      .subscribe(responseData => {
        console.log("Client received response from server: "+ responseData);
      });
    location.reload();
  }

  deleteStudent(studentId: string) {
    this.http.delete("http://localhost:8000/students/" + studentId)
      .subscribe(() => {
          console.log('Deleted: ' + studentId);
      });
    location.reload();
  }

 }
