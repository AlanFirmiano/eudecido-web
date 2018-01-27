import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

declare var Materialize:any;
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: any = {name: '', login: '', senha: ''};
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
  }

  salvar(){
    this.service.cadastrar(this.usuario).subscribe(
      res => {
        Materialize.toast("Usuario cadastrado!", 3000, "green");
        this.router.navigate(['']);
      },
      err => {
        Materialize.toast("Erro, "+err, 3000, "red");
      });
  }

}
