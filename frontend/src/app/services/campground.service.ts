import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Campground from 'src/models/campground';

@Injectable({
  providedIn: 'root',
})
export class CampgroundService {
  apiURL = 'http://localhost:3000/campgrounds';

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.apiURL);
  }

  fetchByid(id: string) {
    return this.http.get<Campground>(`${this.apiURL}/${id}`);
  }
}
