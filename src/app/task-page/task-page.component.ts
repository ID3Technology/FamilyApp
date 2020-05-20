import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  form: FormGroup;//form object that has access to the formGroup methods

  constructor(public fb: FormBuilder, private http: HttpClient) {
    
    this.form = this.fb.group({
      name: [''],
      date: [''],
      task1: [''],
      task2: [''],
      task3: [''],
      task4: ['']

    })

   }

  ngOnInit() {
  }

  

  submitForm() {
   // var formData: any = new FormData();
    //formData.append("name", this.form.get('name').value);
    //formData.append("date", this.form.get('date').value);
    //formData.append("task1", this.form.get('task1').value);
    //formData.append("task2", this.form.get('task2').value);
    //formData.append("task3", this.form.get('task3').value);
    //formData.append("task4", this.form.get('task4').value);

     //subscribe means activating the data thats being sent to the endpoint     
    //this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
     // (response) => console.log(response),
      //(error) => console.log(error)
    //)

    console.log(this.form.value)
  }

}
