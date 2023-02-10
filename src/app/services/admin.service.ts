import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';;


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8'})
  };
  private baseUrl = "https://localhost:44352/";
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  login(LoginModel: any){
    console.log(JSON.stringify(LoginModel));
    return this.http.post<any>(this.baseUrl + 'login',LoginModel)
   
  }
  
}