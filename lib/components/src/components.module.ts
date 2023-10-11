import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DisplayDateComponent } from "./display-date/display-date.component";

const COMPONENTS = [
  DisplayDateComponent
]

@NgModule( {
  imports: [ CommonModule ],
  exports: COMPONENTS,
  declarations: COMPONENTS,
  providers: []
} )

export class ComponentsModule {}
