import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-detalhes-obras',
  templateUrl: './detalhes-obras.component.html',
  styleUrls: ['./detalhes-obras.component.css']
})
export class DetalhesObrasComponent implements OnInit {

  private post;
  private ob: any;
  private lat = -3.7884705;
  private lon = -39.2635227;
  constructor(private service: AppService) {
    this.ob = this.service.ob;
   }

  ngOnInit() {
  }

  bom(){
    this.ob.bom.push(localStorage.getItem('login'));
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Atualizado!", 3000, "green")
      }
    )
  }

  ruim(){
    this.ob.ruim.push(localStorage.getItem('login'));
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Atualizado!", 3000, "green")
      }
    )
  }

  comentar(){
    this.ob.comentarios.push({texto: this.post, user:localStorage.getItem('login')})
    this.service.up(this.ob).subscribe(
      res => {
        Materialize.toast("Comentado!", 3000, "green")
      }
    )
  }

}
