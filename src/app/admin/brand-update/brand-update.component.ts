import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})

export class BrandUpdateComponent implements OnInit {
  id: number = 0;
    constructor (private br: BrandService, private route: ActivatedRoute, private _route: Router) {}
    brandFormUpdate= new FormGroup({
        brandName: new FormControl(''),
        brandImage: new FormControl(''),
    });
    message: boolean=false;

    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.br.getOne(this.route.snapshot.params['id']).subscribe((data: any) => {
        this.brandFormUpdate = new FormGroup({
          brandName: new FormControl(data['brandName'],[Validators.required, Validators.minLength(3)]),
          brandImage: new FormControl(data['brandImage'],Validators.required),
      });
      })
    }
    get f() {
      return this.brandFormUpdate.controls;
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


    onUpdateBrand(){
    const formData: FormData = new FormData();
    formData.append('brandImage', this.fileToUpload);
    formData.append('brandName', this.brandFormUpdate.value.brandName);
        this.br.updateBrands(this.route.snapshot.params['id'],formData).
        subscribe((data) => {
          this._route.navigate(['/brand-list']);
        });
      }
    

    removeMessage() {
      this.message=false;
    }
}