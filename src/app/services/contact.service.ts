import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const apiUrl = 'https://localhost:44352/api/';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
 /*Get List limit: giới hạn số lượng sp hiển thị, sort: sắp xếp theo id, desc: theo thứ thự id giảm dần*/
  getContacts(_limit: number = 6, search_Key: any = null) {
    let url =apiUrl + 'contact/?_limit=' + _limit + '&_sort=id&_order=desc';
    if (search_Key != null) {
      url += '&name_like='+search_Key;
    }
    return this.http.get<any[]>(apiUrl + 'Contact');
  }
 /*======================================================================================================*/
 getContact(_limit: number = 6, search_Key: any = null){
  let url =apiUrl + 'contact/?_limit=' + _limit;
  if (search_Key != null) {
    url += '&name_like='+search_Key;
  }
  return this.http.get<any>(url);
}
  /*Add Contact*/
  createContact(Contactdto:any){
    console.log(JSON.stringify(Contactdto));
    return this.http.post<boolean>(apiUrl + 'contact/',Contactdto);
  }

  /*Get/id*/
  getOne(id: number) {
    return this.http.get<any>(apiUrl + 'contact/' + id);
  }

  updateContact(id:number, dataContact:any){
    return this.http.put<any>(apiUrl + 'contact/'+ id, dataContact);
  }

  /*Delete Brand*/
  deleteContact(id: number) {
    return this.http.delete<any>(apiUrl + 'contact/' + id);
  }
}