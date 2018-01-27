import { AutenticacaoGuard } from './autenticacao.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaObrasComponent } from './lista-obras/lista-obras.component';
import { DetalhesObrasComponent } from './detalhes-obras/detalhes-obras.component';
import { AppService } from './app.service';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ListaObrasComponent,
    DetalhesObrasComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnx7rLXtFCWwOWmBYxXyjX6FajutHqsLI'
    }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'  },
    AppService,
    AutenticacaoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
