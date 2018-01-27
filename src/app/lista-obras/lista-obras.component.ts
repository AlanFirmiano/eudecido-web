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
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.service.buscar().subscribe(
      res =>{
        this.lista = res
      }
    )
  }

  detalhes(ob){
    this.service.ob = ob;
    this.router.navigate(['detalhes']); 
  }

}
