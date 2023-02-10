import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:44352/';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  constructor(private http: HttpClient) { }
  getSlides(_limit: number = 6, search_Key: any = null) {
    let url =apiUrl + 'slide/?_limit=' + _limit + '&_sort=id&_order=desc';
    if (search_Key != null) {
      url += '&name_like='+search_Key;
    }
    return this.http.get<any>(url);
  }
  getSlideshows(){
    return this.http.get<any>(apiUrl + 'slide');
  }

  createSlideshows(Slidedto:any){
    console.log(JSON.stringify(Slidedto));
    return this.http.post<boolean>(apiUrl + 'slide/',Slidedto);
  }

  /*Get/id*/
  getOne(id: number) {
    return this.http.get<any>(apiUrl + 'slide/' + id);
  }

  updateSlideshows(id:number, dataSlide:any){
    return this.http.put<any>(apiUrl + 'slide/'+ id, dataSlide);
  }

  /*Delete Brand*/
  deleteSlideshows(id: number) {
    return this.http.delete<any>(apiUrl + 'slide/' + id);
  }
}