import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantas } from './plantas';
import { environment } from '../../environments/environment';


@Injectable({  providedIn: 'root'
})
export class PlantasService {
    getPlantas() {
      throw new Error('Method not implemented.');
    }
    private apiUrl = environment.baseUrl + 'plantas.json';
    constructor(private http: HttpClient) { }

    getCourses(): Observable<Plantas[]> {
      return this.http.get<Plantas[]>(this.apiUrl);
}
}