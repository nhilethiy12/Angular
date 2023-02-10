import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brands: any[] = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  searchFormBrand= new FormGroup({
    brandName: new FormControl('')
});
  constructor(private br: BrandService) { }

  ngOnInit(): void {
    this.br.getBrandsDb(7).subscribe(data => {
      this.brands = data;
      this.totalLength = data.length;
    })
  }

  onDeleteBrand(id: number) {
    if (confirm("Are you sure delete?")){
      this.br.deleteBrands(id).subscribe(data => {
        this.br.getBrands().subscribe(data => {
          this.brands = data;
          this.totalLength = data.length;
        })
      })
    }
  }

  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/brands/${serverPath}`; 
  }
  onSearchBrand(){
    this.br.getBrands(7, this.searchFormBrand.value.brandName).subscribe(data => {
      this.brands = data;
    })
  }

}
