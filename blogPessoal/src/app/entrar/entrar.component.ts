import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

//instanciando a classe UserLogin
  userLogin: UserLogin = new UserLogin
 

  constructor(
    private auth: AuthService, //classe que vai trazer os atributos do auth.services.ts
    private router: Router //classe que vai fazer o RouterLink no Angular
  ) { }

  ngOnInit() {
    window.scroll(0,0) //mouse começar no inicio da página

    environment.token = ''
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
    this.userLogin = resp

    environment.token = this.userLogin.token
    environment.nome = this.userLogin.nome
    environment.foto = this.userLogin.foto
    environment.id = this.userLogin.id

    /*
    console.log(environment.token)
    console.log(environment.nome)  para saber se os dados estão sendo recebidos
    console.log(environment.foto)
    console.log(environment.id)
    */

    this.router.navigate(['/inicio']) //ir para a página inicio quando logar

  }, erro =>{ //tratamento de erro 500
    if(erro.status == 500){
      alert('Usuário ou senha incorretos')
    }
  })

  }

}
