import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
//Redirecionamento quando não tem nada na guia de url
{path:'', redirectTo: 'entrar', pathMatch: 'full'},

//caminhos expecíficos de cada página da aplicação
{path:'entrar', component:EntrarComponent},
{path:'cadastrar', component:CadastrarComponent},
{path:'inicio', component:InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
