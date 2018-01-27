import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  private oapiUrl: string = "http://localhost:3003/oapi/"
  private apiUrl: string = "http://localhost:3003/api/"

  constructor(private http: Http) { }

  //usuario
  logar(login, senha): Observable<any>{
    return this.http.post(this.oapiUrl+'logar', {login, senha})
    .map(
      res => { return res.json() }
    );
  }

  cadastrar(user): Observable<any>{
    return this.http.post(this.oapiUrl+'cadastrar', user)
      .map(
        res => { return res.json() }
      );
  }
}
