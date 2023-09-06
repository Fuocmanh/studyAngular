import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() idInput: string = '';
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
    // @ts-ignore
    @Input() pattern: string = null;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>
  handleKeyUp(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue)
  }
}
