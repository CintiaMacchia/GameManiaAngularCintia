import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor() { }

botao() {
  alert('Mensagem enviada com sucesso! Logo entraremos em contato.')
  alert("Obrigado pela visita.")
}
  ngOnInit(): void{
  }

}


