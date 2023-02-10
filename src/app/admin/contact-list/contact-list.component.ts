import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  cus: any[] = [];
  searchText: any;
  totalLength:any;
  page: number = 1;
  searchForm= new FormGroup({
    fullName: new FormControl('')
});
  constructor(private c: ContactService) { }

  ngOnInit(): void {
    this.c.getContacts(7).subscribe(data => {
      this.cus = data;
      this.totalLength = data.length;
    })
  }

  onDeleteCus(id: number) {
    if (confirm("Are you sure delete?")){
      this.c.deleteContact(id).subscribe(data => {
        this.c.getContacts().subscribe(data => {
          this.cus = data;
          this.totalLength = data.length;
        })
      })
    }
  }

  onSearch(){
    this.c.getContacts(7, this.searchForm.value.fullName).subscribe(data => {
      this.cus = data;
    })
  }

}
