import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lista-obras',
  templateUrl: './lista-obras.component.html',
  styleUrls: ['./lista-obras.component.css']
})
export class ListaObrasComponent implements OnInit {

  lista = []
  rankingBom = []
  rankingRuim = []
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.service.buscar().subscribe(
      res =>{
        this.lista = res
        this.service.rankingBom().subscribe(res2=>{
          this.rankingBom = res2;
        });
        this.service.rankingRuim().subscribe(res3=>{
          this.rankingRuim = res3;
        });
      }
    )
  }



  detalhes(ob){
    this.service.ob = ob;
    this.router.navigate(['detalhes']);
  }

}
