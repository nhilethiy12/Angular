import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const apiUrl = 'https://localhost:44352/api/';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }
 /*Get List limit: giới hạn số lượng sp hiển thị, sort: sắp xếp theo id, desc: theo thứ thự id giảm dần*/
  getCheckouts(_limit: number = 6, search_Key: any = null) {
    let url =apiUrl + 'checkouts/?_limit=' + _limit + '&_sort=id&_order=desc';
    if (search_Key != null) {
      url += '&name_like='+search_Key;
    }
    return this.http.get<any[]>(apiUrl + 'checkout');
  }
 /*======================================================================================================*/
 getCheckout(_limit: number = 6, search_Key: any = null){
  let url =apiUrl + 'checkouts/?_limit=' + _limit;
  if (search_Key != null) {
    url += '&name_like='+search_Key;
  }
  return this.http.get<any>(url);
}
  /*Add checkout*/
  createCheckout(Checkoutdto:any){
    console.log(JSON.stringify(Checkoutdto));
    return this.http.post<boolean>(apiUrl + 'checkout/',Checkoutdto);
  }

  /*Get/id*/
  getOne(id: number) {
    return this.http.get<any>(apiUrl + 'checkout/' + id);
  }

  updateCheckout(id:number, datacheckout:any){
    return this.http.put<any>(apiUrl + 'checkout/'+ id, datacheckout);
  }

  /*Delete Brand*/
  deleteCheckout(id: number) {
    return this.http.delete<any>(apiUrl + 'checkout/' + id);
  }
}