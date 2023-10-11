import { NgModule } from "@angular/core";
import { PriceComponent } from "./price/price.component";
import { CommonModule } from "@angular/common";

const COMPONENTS = [
  PriceComponent
]

@NgModule( {
  imports: [ CommonModule ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: []
} )

export class CommonComponentsModule {}
