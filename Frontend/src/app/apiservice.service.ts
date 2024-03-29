import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  [x: string]: any;
url:string ='http://localhost:8080/formations';
  constructor(private http:HttpClient) { }

  public getformations ():Observable<any>{
    return this.http.get(this.url );
  }

  public createFormation (formation:any):Observable<any>{
    return this.http.post(this.url ,formation);
  }

  public deleteFormation(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  public updateFormation(formation: any, id: number): Observable<any> {
    return this.http.put(`${this.url}/${id}`, formation);
  }
  public searchFormationsByTitle(title: string): Observable<any> {
    const searchUrl = `${this.url}/search?titre=${title}`;
    return this.http.get(searchUrl);
  }
}
