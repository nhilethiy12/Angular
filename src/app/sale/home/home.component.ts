import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BrandService } from 'src/app/services/brand.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ProductService } from 'src/app/services/product.service';
import { SlideshowService } from 'src/app/services/slideshow.service';

import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  brand: any[] = [];
  slides: any[] = [];
  collect: any[] = [];
  totalLength:any;
  page: number = 1;
  productDb:any[]=[];
  slideOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: false,
  }

  config: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: true
  }; 


  productOptions: OwlOptions = {
    loop: false,
    margin: 20,
    stagePadding: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>']
    
  }

  searchOptions: OwlOptions = {
    loop: false,
    margin: 20,
    stagePadding: 20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>']
    
  }
  
  constructor(private slide: SlideshowService, private pro: ProductService, private br: BrandService,private col: CollectionService) { }

  ngOnInit(): void {    

    this.slide.getSlideshows().subscribe(data =>{
      this.slides = data;
    });

    this.br.getBrandsDb(6).subscribe((data: any)=> {
      this.brand = data;
    });

    this.col.getCollections(6).subscribe((data: any)=> {
      this.collect = data;
    });

    this.pro.getProductsDb().subscribe(res=>{
      this.productDb=res;
      console.log(res)
      this.totalLength = res.length;
    })
    
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/products/${serverPath}`; 
  }

  public createImgBPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/brands/${serverPath}`; 
  }

  public createImgCPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
  }

  public createImgSPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/slides/${serverPath}`; 
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  onEdit(){
    window.scrollTo(0,0);
  }

}
