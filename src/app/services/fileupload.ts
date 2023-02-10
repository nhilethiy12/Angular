import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const apiUrl = 'https://localhost:44352/api/';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  url = 'https://localhost:44316/API/Demo';  
    constructor(private http: HttpClient) {}  
    public downloadFile(docFile: string): Observable < Blob > {  
        return this.http.get(this.url + '/GetFile?docFile=' + docFile, {  
            responseType: 'blob'  
        });  
    }  
    public downloadImage(image: string): Observable < Blob > {  
        return this.http.get(this.url + '/GetImage?image=' + image, {  
            responseType: 'blob'  
        });  
    }  
    public getFiles(): Observable < any[] > {  
        return this.http.get < any[] > (this.url + '/GetFileDetails');  
    }  
    AddFileDetails(data: FormData): Observable < string > {  
        let headers = new HttpHeaders();  
        headers.append('Content-Type', 'application/json');  
        const httpOptions = {  
            headers: headers  
        };  
        return this.http.post < string > (this.url + '/AddFileDetails/', data, httpOptions);  
    }  
}