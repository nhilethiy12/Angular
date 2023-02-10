import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl ='https://localhost:44352/';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private http: HttpClient) { }

  getBrandsDb(_limit: number = 10, search_Key: any = null){
    let url =apiUrl+ 'brand/?_limit=' + _limit;
    if (search_Key != null) {
      url += '&brandName_like='+search_Key;
    }
    return this.http.get<any[]>(apiUrl + 'brand');
  }

 /*Get List limit: giới hạn số lượng sp hiển thị, sort: sắp xếp theo id, desc: theo thứ thự id giảm dần*/
 getBrandss(_limit: number = 6, search_Key: any = null){
  let url =apiUrl + 'brands/?_limit=' + _limit + '&_sort=id&_order=desc';
  if (search_Key != null) {
    url += '&name_like='+search_Key;
  }
  return this.http.get<any>(url);
}

  /*==================================================================================================*/
  getBrands(_limit: number = 10, search_Key: any = null){
    let url =apiUrl + 'brand/?_limit=' + _limit;
    if (search_Key != null) {
      url += '&brandName_like='+search_Key;
    }
    return this.http.get<any>(apiUrl + 'brand');
  }

  /*Add Brand*/
  createBrands(Branddto:any){
    console.log(JSON.stringify(Branddto));
    return this.http.post<boolean>(apiUrl + 'brand/',Branddto);
  }

  /*Get/id*/
  getOne(id: number) {
    return this.http.get<any>(apiUrl+ 'brand/' + id);
  }

  /*Update Brand*/
 updateBrands(id:number, dataBrand:any){
    return this.http.put<any>(apiUrl + 'brand/'+ id, dataBrand);
  }

  /*Delete Brand*/
  deleteBrands(id: number) {
    return this.http.delete<any>(apiUrl + 'brand/' + id);
  }

}