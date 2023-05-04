import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ //imports
    IonicModule,
    CommonModule
  ],
})
export class HomePage {
  item_selecionado: string = "pokemon";

  selecionarCards(event: any){ // Any vai aceitar qualquer tipo de dados
    console.log(event)
    this.item_selecionado = event.detail.value; //pegar variáveis fora da function usa this
    console.log(this.item_selecionado)
  }
}
