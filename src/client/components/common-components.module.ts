import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceComponent } from './price/price.component';

const COMPONENTS = [PriceComponent];

@NgModule({
  imports: [CommonModule],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: [],
})
export class CommonComponentsModule {}
