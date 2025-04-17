import { NgModule } from "@angular/core";
import { HeaderComponent } from "./components/layout/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }
