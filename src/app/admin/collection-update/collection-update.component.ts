import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';
@Component({
  selector: 'app-collection-update',
  templateUrl: './collection-update.component.html',
  styleUrls: ['./collection-update.component.css']
})

export class CollectionUpdateComponent implements OnInit {
  id: number = 0;
    constructor (private br: CollectionService, private route: ActivatedRoute, private _route: Router) {}
    collectionFormUpdate= new FormGroup({
        collectionName: new FormControl(''),
        brandId: new FormControl(''),
    });
    message: boolean=false;

    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
      this.br.getOneCollection(this.route.snapshot.params['id']).subscribe((data: any) => {
        this.collectionFormUpdate = new FormGroup({
          collectionName: new FormControl(data['collectionName'],[Validators.required, Validators.minLength(3)]),
          brandId: new FormControl(data['brandId'],[Validators.required])
        });
      })
    }
    get f() {
      return this.collectionFormUpdate.controls;
    }
    fileToUpload: any;
    handleFileInput(e: any) {
      this.fileToUpload = e?.target?.files[0];
    }
    onUpdateCollection(){
      const formData: FormData = new FormData();
    formData.append('CollectionImage', this.fileToUpload);
    formData.append('CollectionImage2', this.fileToUpload);
    formData.append('CollectionName',this.collectionFormUpdate.value.collectionName);
    formData.append('BrandId',this.collectionFormUpdate.value.brandId);
        this.br.updateCollections(this.route.snapshot.params['id'],formData).
        subscribe((data) => {
          this._route.navigate(['/collection-list']);
        });
      }
    

    removeMessage() {
      this.message=false;
    }
}