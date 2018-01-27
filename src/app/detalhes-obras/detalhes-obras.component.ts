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

}
