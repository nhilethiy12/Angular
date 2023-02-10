import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  order:any;
  a: any;
  b: any;
  searchForm= new FormGroup({
    name: new FormControl('')
});
  constructor(private pro: ProductService,private http:  HttpClient,private sanitizer: DomSanitizer) { 
    this.getAllFiles();
  }

  ngOnInit(): void {
    
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
}
  getAllFiles()
  {
    debugger
    return this.http.get('https://localhost:44352/products')
    .subscribe((result) => {
      this.products = result;
      console.log(result);
  });
  }

  onDelete(id: number) {
    if (confirm("Are you sure delete?")){
      this.pro.deleteProducts(id).subscribe(data => {
        this.pro.getProducts().subscribe(data => {
          this.products = data;
        })
      })
    }
  }
public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
  }
  onSearch(){
    this.pro.getProducts(10, this.searchForm.value.name).subscribe(data => {
      this.products = data;
    })
  }

  sort(){
    if(this.order) {
      let newarr = this.products.sort((a:any,b:any)=> a.productId - b.productId);
      this.products = newarr
    }

    else {
      let newarr = this.products.sort((a:any,b:any)=> b.productId - a.productId);
      this.products = newarr
    }
  }

}
