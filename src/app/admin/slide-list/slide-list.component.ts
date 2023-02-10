import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SlideshowService } from 'src/app/services/slideshow.service';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {
  slides: any[] = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  searchFormSlide= new FormGroup({
    slideName: new FormControl('')
});
  constructor(private br: SlideshowService) { }

  ngOnInit(): void {
    this.br.getSlides(7).subscribe(data => {
      this.slides = data;
      this.totalLength = data.length;
    })
  }

  onDeleteSlide(id: number) {
    if (confirm("Are you sure delete?")){
      this.br.deleteSlideshows(id).subscribe(data => {
        this.br.getSlideshows().subscribe(data => {
          this.slides = data;
        })
      })
    }
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/slides/${serverPath}`; 
  }

  onSearchSlide(){
    this.br.getSlides(7, this.searchFormSlide.value.slideName).subscribe(data => {
      this.slides = data;
    })
  }

}
