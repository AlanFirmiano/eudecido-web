import { AutenticacaoGuard } from './autenticacao.guard';
import { ListaObrasComponent } from './lista-obras/lista-obras.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetalhesObrasComponent } from './detalhes-obras/detalhes-obras.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'lista', component: ListaObrasComponent, canActivate: [AutenticacaoGuard]},
  { path: 'detalhes', component: DetalhesObrasComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }