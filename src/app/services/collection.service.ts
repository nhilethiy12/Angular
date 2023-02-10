import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const apiUrl = 'https://localhost:44352/';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }
 /*Get List limit: giới hạn số lượng sp hiển thị, sort: sắp xếp theo id, desc: theo thứ thự id giảm dần*/
  getCollections(_limit: number = 6, search_Key: any = null) {
    let url =apiUrl + 'collections/?_limit=' + _limit + '&_sort=id&_order=desc';
    if (search_Key != null) {
      url += '&name_like='+search_Key;
    }
    return this.http.get<any[]>(apiUrl + 'collections');
  }
 /*======================================================================================================*/
 getCollection(_limit: number = 6, search_Key: any = null){
  let url =apiUrl + 'collections/?_limit=' + _limit;
  if (search_Key != null) {
    url += '&name_like='+search_Key;
  }
  return this.http.get<any>(url);
}
  /*Add Collection*/
  createCollections(Collectionsdto:any){
    console.log(JSON.stringify(Collectionsdto));
    return this.http.post<boolean>(apiUrl + 'collections/',Collectionsdto);
  }

  /*Get/id*/
  getOneCollection(id: number) {
    return this.http.get<any>(apiUrl + 'collections/' + id);
  }

  updateCollections(id:number, dataCollection:any){
    return this.http.put<any>(apiUrl + 'collections/'+ id, dataCollection);
  }

  /*Delete Brand*/
  deleteCollections(id: number) {
    return this.http.delete<any>(apiUrl + 'collections/' + id);
  }
}