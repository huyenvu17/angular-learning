import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { BaitapNgIfComponent } from './baitap-ng-if/baitap-ng-if.component';



@NgModule({
  declarations: [StructuralDirectivesComponent, NgIfComponent, NgSwitchComponent, NgForComponent, BaitapNgIfComponent],
  imports: [
    CommonModule
  ],
  exports: [StructuralDirectivesComponent]
})
export class StructuralDirectivesModule { }
