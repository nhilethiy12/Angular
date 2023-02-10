import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const ApiUrl="https://localhost:44352/";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filter: any;

  constructor(private http: HttpClient) { }
  getProductsDb(_limit: number = 6){
    return this.http.get<any[]>(ApiUrl+ 'products/');
  }
 /*Get List limit: giới hạn số lượng sp hiển thị, sort: sắp xếp theo id, desc: theo thứ thự id giảm dần*/
  getProducts(_limit: number = 6, search_Key: any = null) {
    let url =ApiUrl + 'products/?_limit=' + _limit + '&_sort=id&_order=desc';
    if (search_Key != null) {
      url += '&name_like='+search_Key;
    }
    return this.http.get<any>(url);
  }
 /*======================================================================================================*/
 getProduct(_limit: number = 6, search_Key: any = null) {
  let url =ApiUrl + 'products/?_limit=' + _limit + '&_sort=id&_order=desc';
  if (search_Key != null) {
    url += '&name_like='+search_Key;
  }
  return this.http.get<any>(url);
}

/*Get/id*/
getOne(id: number) {
  return this.http.get<any>(ApiUrl + 'products/' + id);
}

/*Add Product*/
createProducts(Productdto:any){
  console.log(JSON.stringify(Productdto));
  return this.http.post<any>(ApiUrl+'products/',Productdto);
}
  /*Update Product*/
 updateProducts(id:number, data:any){
    return this.http.put<any>(ApiUrl + 'products/'+ id, data);
  }

  /*Delete Product*/
  deleteProducts(id: number) {
    return this.http.delete<any>(ApiUrl + 'products/'+ id);
  }
 /*Lấy sp theo Brand Id*/

  listProductByBrand(brandId: any) {
    return this.http.get<any>(ApiUrl + 'products/brandId/'+brandId);
  }

}