import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
  @Input() value: string = "Entrar"
  @Input() type: string = "submit"
  constructor() { }

  ngOnInit() {}

}
