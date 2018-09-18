import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { pipe } from '@angular/core/src/render3/pipe';
import { map } from 'rxjs/Operators';

@Injectable()
export class StudentService {
    private httpUrl = 'http://localhost:65346/';

    constructor(
      public http: Http)
       {       }

       getStudentList(): Observable<any> {
         return this.http.get(this.httpUrl + 'api/Student/getStudentList').pipe(map((res: any) => res.json()));
        }

       postStudent(d): Observable<any> {
         return this.http.post(this.httpUrl + 'api/Student/postStudent', d).pipe(map((res: Response) => res.json()));
       }
       delete(id): Observable<any> {
         return this.http.get(this.httpUrl + 'api/Student/deleteStudent/' + id).pipe(map((res: Response) => res.json()));
       }
       getById(id): Observable<any> {
         return this.http.get(this.httpUrl + 'api/Student/GetById' + id).pipe(map((res: Response) => res.json()));
       }
       login(d): Observable<any> {
         return this.http.post(this.httpUrl + 'api/Student/login', d).pipe(map((res: Response) => res.json()));
       }


}
