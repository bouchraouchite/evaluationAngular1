import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdherantService {
  url: string = 'http://localhost:8080/adherants';

  constructor(private http: HttpClient) { }

  public getAdherants(): Observable<any> {
    return this.http.get(this.url);
  }

  public createAdherant(adherant: any): Observable<any> {
    return this.http.post(this.url, adherant);
  }

  public deleteAdherant(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  public updateAdherant(adherant: any, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, adherant);
  }

  public searchFormationsByTitle(title: string): Observable<any> {
    const searchUrl = `${this.url}/search?titre=${title}`;
    return this.http.get(searchUrl);
  }
}
