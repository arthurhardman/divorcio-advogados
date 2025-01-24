import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/core/paginas/cardapio-base/services/pizza.service';
import { IBebida } from 'src/app/core/paginas/cardapio-base/models/pizzas.interface';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit{
  bebidas!: Array<IBebida>

  constructor (private pizzaService: PizzaService) {}

  ngOnInit() {
    this.recuperarBebidas();
  }

  recuperarBebidas() {
    this.pizzaService.recuperarBebidas()
      .subscribe((response) => {
        this.bebidas = response;
      });
  }
}
