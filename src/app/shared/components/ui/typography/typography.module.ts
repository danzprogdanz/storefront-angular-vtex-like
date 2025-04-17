import { NgModule } from "@angular/core";
import { HeadingComponent } from "./heading/heading.component";
import { TextComponent } from "./text/text.component";

@NgModule({
  declarations: [HeadingComponent, TextComponent],
  exports: [HeadingComponent, TextComponent]
})
export class TypographyModule {}
