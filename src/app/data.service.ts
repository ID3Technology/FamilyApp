import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class DataService {
  
   API_URL = environment.apiUserTaskUrl;

  constructor(private HttpClient: HttpClient) { }

//Method returns all User Task entered
  public getAllUserTask() {
      return this.HttpClient.get(this.API_URL);
  }

  
}
