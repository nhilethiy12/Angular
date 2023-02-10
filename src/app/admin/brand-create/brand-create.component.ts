import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {
  constructor(private br: BrandService, private route: Router,private http:  HttpClient) { }
  brandFormCreate: FormGroup =new FormGroup({
    brandName: new FormControl('',[Validators.required, Validators.minLength(3)]),
  });
  submited:boolean = false;
  ngOnInit(): void {
  }
  get f() {
    return this.brandFormCreate.controls;
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


  onCreateBrand(){
    const formData: FormData = new FormData();
    formData.append('brandImage', this.fileToUpload);
    formData.append('brandName', this.brandFormCreate.value.brandName);
    return this.http.post('https://localhost:44352/brand/', formData).
    subscribe((data) => {
      this.route.navigate(['/brand-list']);
    });
  }
}

