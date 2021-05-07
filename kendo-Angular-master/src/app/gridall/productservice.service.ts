import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  url = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }
}
