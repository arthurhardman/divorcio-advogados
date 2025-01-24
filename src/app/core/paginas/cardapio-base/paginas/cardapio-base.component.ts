import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapio-base',
  templateUrl: './cardapio-base.component.html',
  styleUrls: ['./cardapio-base.component.css']
})
export class CardapioBaseComponent {
  selectedTab: string = 'pizzas';

  constructor (private router: Router){}

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  onClickNavigateByCardapio() {
    this.router.navigateByUrl(`/inicio`);
  }
}
