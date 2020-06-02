import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private REST_API_SERVER = "http://localhost:3000";

  constructor(private HttpClient: HttpClient) { }

  //Method sends task form data to backend service
  public sendTaskData(FormData) {
        return this.HttpClient.post(this.REST_API_SERVER, FormData);
     
  }
  
  //Method returns all task data back from the backend service
  //public returnTaskData(){
      //return this.HttpClient.get();
  //}

}
