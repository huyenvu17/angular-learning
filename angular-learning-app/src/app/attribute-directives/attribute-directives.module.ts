import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { HightlightDirectivesDirective } from './hightlight-directives.directive';



@NgModule({
  declarations: [AttributeDirectivesComponent, NgStyleComponent, NgClassComponent, HightlightDirectivesDirective],
  imports: [
    CommonModule
  ],
  exports: [AttributeDirectivesComponent]
})
export class AttributeDirectivesModule { }
