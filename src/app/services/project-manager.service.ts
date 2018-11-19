import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private authUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(): Observable<any> {
    return this.http.get(`${this.authUrl}/subjects`, httpOptions);
  }

  addSubject(newSubject): Observable<any> {
    return this.http.post(`${this.authUrl}/subjects`, newSubject, httpOptions);
  }

  deleteSubject(subjectId: any): Observable<any> {
    return this.http.delete(`${this.authUrl}/subjects/${subjectId}`, httpOptions);
  }

  updateSubject(subject: any): Observable<any> {
    return this.http.put(`${this.authUrl}/subjects/${subject.id}`, subject, httpOptions);
  }

  getClasses(): Observable<any> {
    return this.http.get(`${this.authUrl}/classes`, httpOptions);
  }

  addClass(newClass): Observable<any> {
    return this.http.post(`${this.authUrl}/classes`, newClass, httpOptions);
  }

  deleteClass(classId: any): Observable<any> {
    return this.http.delete(`${this.authUrl}/classes/${classId}`, httpOptions);
  }

  updateClass(curClass: any): Observable<any> {
    return this.http.put(`${this.authUrl}/classes/${curClass.id}`, curClass, httpOptions);
  }
}
