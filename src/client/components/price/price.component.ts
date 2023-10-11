import { Component, Input } from '@angular/core';

@Component( {
  selector: 'price',
  templateUrl: 'price.component.html'
} )

export class PriceComponent {

  @Input()
  price: number;

}
