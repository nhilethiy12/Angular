import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public progress: any;
  public messagee: any;
  imageUrl: string = "/assets/img/default-image.png";
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private pro: ProductService, private route: Router,private http:  HttpClient) { }
  productFormCreate: FormGroup =new FormGroup({
    productName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    price: new FormControl('',[Validators.required, Validators.min(100000)]),
    qnt: new FormControl('',[Validators.required]),
    qnt1: new FormControl('',[Validators.required]),
    detail: new FormControl('',Validators.required),
    brandId: new FormControl('',[Validators.required])
  });
  message: boolean=false;
  ngOnInit(): void {
  } 
  get f() {
    return this.productFormCreate.controls;
  }
fileToUpload: any;
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
	var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
 
  onCreate(){
    const formData: FormData = new FormData();
    formData.append('productImage', this.fileToUpload);
    formData.append('productName', this.productFormCreate.value.productName);
    formData.append('price', this.productFormCreate.value.price);
    formData.append('qnt', this.productFormCreate.value.qnt);
    formData.append('qnt1', this.productFormCreate.value.qnt1);
    formData.append('detail', this.productFormCreate.value.detail);
    formData.append('brandId', this.productFormCreate.value.brandId);
    return this.http.post('https://localhost:44352/products/', formData).
    subscribe((data) => {
      this.route.navigate(['/product-list']);
    });
  }


}

