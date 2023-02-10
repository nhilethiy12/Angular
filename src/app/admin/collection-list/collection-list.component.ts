import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  collections: any[] = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  searchFormcollection= new FormGroup({
    collectionName: new FormControl('')
});
  constructor(private br: CollectionService) { }

  ngOnInit(): void {
    this.br.getCollections(7).subscribe(data => {
      this.collections = data;
      this.totalLength = data.length;
    })
  }

  onDeletecollection(id: number) {
    if (confirm("Are you sure delete?")){
      this.br.deleteCollections(id).subscribe(data => {
        this.br.getCollections().subscribe(data => {
          this.collections = data;
          this.totalLength = data.length;
        })
      })
    }
  }
  public createImgPath = (serverPath: string) => { 
    return `https://localhost:44352/wwwroot/collections/${serverPath}`; 
  }
  onSearchcollection(){
    this.br.getCollections(7, this.searchFormcollection.value.collectionName).subscribe(data => {
      this.collections = data;
    })
  }

}
