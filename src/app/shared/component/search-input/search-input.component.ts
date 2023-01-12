import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Output() onTextChange = new EventEmitter<string>();

  onChange(e: HTMLInputElement) {
    this.onTextChange.emit(e.value)
  }
}
