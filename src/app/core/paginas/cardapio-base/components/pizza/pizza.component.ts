import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IPizza } from 'src/app/core/paginas/cardapio-base/models/pizzas.interface';
import { PizzaService } from 'src/app/core/paginas/cardapio-base/services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  pizzas!: Array<IPizza>;
  selectedPizza!: IPizza | null;
  modalRef!: BsModalRef;

  constructor(
    private pizzaService: PizzaService,
  ) {}

  ngOnInit() {
    this.recuperarPizzas();
  }

  recuperarPizzas() {
    this.pizzaService.recuperarPizzas().subscribe((response) => {
      this.pizzas = response;
    });
  }

  openPizzaDetails(pizza: IPizza) {
    this.selectedPizza = pizza;
  }

  closePizzaDetails() {
    this.selectedPizza = null;
  }
}
