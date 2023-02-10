import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SlideshowService } from 'src/app/services/slideshow.service';
@Component({
  selector: 'app-slide-update',
  templateUrl: './slide-update.component.html',
  styleUrls: ['./slide-update.component.css']
})

export class SlideUpdateComponent implements OnInit {
  id: number = 0;
    constructor (private br: SlideshowService, private route: ActivatedRoute, private _route: Router) {}
    slideFormUpdate= new FormGroup({
        slideImage: new FormControl(''),
    });
    message: boolean=false;

    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.br.getOne(this.route.snapshot.params['id']).subscribe((data: any) => {
        this.slideFormUpdate = new FormGroup({
          slideImage: new FormControl(data['slideImage'],Validators.required),
      });
      })
    }
    get f() {
      return this.slideFormUpdate.controls;
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

    onUpdateSlide(){
    const formData: FormData = new FormData();
    formData.append('slideImage', this.fileToUpload);
    this.br.updateSlideshows(this.route.snapshot.params['id'],formData).
    subscribe((data) => {
      this._route.navigate(['/slide-list']);
    });
  }

    removeMessage() {
      this.message=false;
    }
}