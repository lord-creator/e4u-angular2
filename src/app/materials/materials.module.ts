import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatIcon } from '@angular/material/icon';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';

const MaterialComponents = [
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatBadgeModule


]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialsModule { }
