import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-create',
  templateUrl: './collection-create.component.html',
  styleUrls: ['./collection-create.component.css']
})
export class CollectionCreateComponent implements OnInit {
  constructor(private br: CollectionService, private route: Router,private http:  HttpClient) { }
  collectionFormCreate: FormGroup =new FormGroup({
    collectionName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    brandId: new FormControl('',[Validators.required])
  });
  submited:boolean = false;
  ngOnInit(): void {
  }
  get f() {
    return this.collectionFormCreate.controls;
  }
  fileToUpload: any;
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  onCreateCollection(){
    const formData: FormData = new FormData();
    formData.append('collectionImage', this.fileToUpload);
    formData.append('collectionImage2', this.fileToUpload);
    formData.append('CollectionName',this.collectionFormCreate.value.collectionName);
    formData.append('BrandId',this.collectionFormCreate.value.brandId);
    return this.http.post('https://localhost:44352/collections/', formData).
    subscribe((data) => {
      this.route.navigate(['/collection-list']);
    });
  }
}

