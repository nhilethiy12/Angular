import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {
  id: number = 0;
    constructor (private pro: ProductService, private route: ActivatedRoute, private _route: Router,private http:  HttpClient) {}
    productFormUpdate= new FormGroup({
        productName: new FormControl(''),
        price: new FormControl(''),
        detail: new FormControl(''),
        qnt1: new FormControl(''),
        brandId: new FormControl(''),
    });
    message: boolean=false;

    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.pro.getOne(this.route.snapshot.params['id']).subscribe((data: any) => {
        this.productFormUpdate = new FormGroup({
          productName: new FormControl(data['productName'],[Validators.required, Validators.minLength(3)]),
          price: new FormControl(data['price'],[Validators.required, Validators.min(100000)]),
          detail: new FormControl(data['detail'],Validators.required),
          qnt1: new FormControl(data['qnt1'],[Validators.required]),
          brandId: new FormControl(data['brandId'],[Validators.required])
      });
      })
    }
    get f() {
      return this.productFormUpdate.controls;
    }
    fileToUpload: any;
  imageUrl: string = "/assets/img/default-image.png";
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
	var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

    onUpdate(){
      const formData: FormData = new FormData();
    formData.append('productImage', this.fileToUpload);
    formData.append('productName', this.productFormUpdate.value.productName);
    formData.append('price', this.productFormUpdate.value.price);
    formData.append('qnt1', this.productFormUpdate.value.qnt1);
    formData.append('detail', this.productFormUpdate.value.detail);
    formData.append('brandId', this.productFormUpdate.value.brandId);
    return this.pro.updateProducts(this.route.snapshot.params['id'],formData).
    subscribe((data) => {
      this._route.navigate(['/product-list']);
    });
    }

    removeMessage() {
      this.message=false;
    }
}