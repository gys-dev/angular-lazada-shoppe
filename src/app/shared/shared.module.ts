import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './component/search-input/search-input.component';



@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SharedModule { }
