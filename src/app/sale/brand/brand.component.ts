import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
 
  brands:any[]=[];
  constructor( private br: BrandService) { }

  ngOnInit(): void {
    /*this.br.getBrands(6).subscribe((data: any)=> {
      this.brands = data;
    });*/

    this.br.getBrandsDb(7).subscribe(res=>{
      this.brands=res;
      console.log(res)
    })
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/brands/${serverPath}`; 
  }
  onEdit(){
    window.scrollTo(0,0);
  }

}
