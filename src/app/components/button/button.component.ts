import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true
})
export class ButtonComponent {
  @Input() value: string = "Entrar"
  @Input() type: string = "submit"
  constructor() { }


}
