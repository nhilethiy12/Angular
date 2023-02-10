import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-slide-create',
  templateUrl: './slide-create.component.html',
  styleUrls: ['./slide-create.component.css']
})
export class SlideCreateComponent implements OnInit {
  constructor(private br: SlideshowService, private route: Router,private http:  HttpClient) { }
  slideFormCreate: FormGroup =new FormGroup({

  });
  submited:boolean = false;
  ngOnInit(): void {
  }
  get f() {
    return this.slideFormCreate.controls;
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

  onCreateslide(){
    const formData: FormData = new FormData();
    formData.append('slideImage', this.fileToUpload);
    return this.http.post('https://localhost:44352/slide/', formData).
    subscribe((data) => {
      this.route.navigate(['/slide-list']);
    });
  
  }
  
}
