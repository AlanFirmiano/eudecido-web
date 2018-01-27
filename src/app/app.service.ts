import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

  private oapiUrl: string = "http://192.168.43.239:3003/oapi/"
  private apiUrl: string = "http://192.168.43.239:3003/api/obras/"
  private options: RequestOptions;

  public ob: any;

  constructor(private http: Http) { }

  //usuario
  logar(login, senha): Observable<any>{
    return this.http.post(this.oapiUrl+'logar', {login, senha})
    .map(
      res => {
        let token = localStorage.getItem("token");
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        header.append('Authorization', token);
        this.options = new RequestOptions({ headers: header });
        return res.json()
      }
    );
  }

  cadastrar(user): Observable<any>{
    return this.http.post(this.oapiUrl+'cadastrar', user)
      .map(
        res => { return res.json() }
      );
  }

  //obras
  buscar(): Observable<any>{
    return this.http.get(this.apiUrl+'?sort=-dataInicio,lat&limit=50&populate=comentarios.user', this.options)
      .map(
        res => {
          console.log(res.json())
          return res.json()
        }
      );
  }

  rankingBom(): Observable<any>{
    return this.http.get(this.apiUrl+'bom', this.options)
      .map(
        res => {
          console.log(res.json())
          return res.json() }
      );
  }
  rankingRuim(): Observable<any>{
    return this.http.get(this.apiUrl+'ruim', this.options)
      .map(
        res => {
          console.log(res.json())
          return res.json() }
      );
  }
  up(obra){
    return this.http.put(this.apiUrl+obra._id, obra, this.options)
      .map(
        res => {
          console.log(res.json())
          return res.json() }
      );
  }
}
