import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Campground from 'src/models/Campground';

@Injectable({
  providedIn: 'root',
})
export class CampgroundService {
  apiURL = 'http://localhost:3000/campgrounds';

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Campground[]> {
    return this.http.get<Campground[]>(this.apiURL);
  }

  fetchById(id: string): Observable<Campground> {
    return this.http.get<Campground>(`${this.apiURL}/${id}`);
  }

  create(campground: Campground): Observable<Campground> {
    return this.http.post<Campground>(this.apiURL, { campground });
  }

  update(updates: Object, id: string) {
    return this.http.put(`${this.apiURL}/${id}`, { updates });
  }

  delete(id: string): Observable<Campground> {
    return this.http.delete<Campground>(`${this.apiURL}/${id}`);
  }
}
