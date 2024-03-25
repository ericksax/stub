import { Component, Output } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton} from '@ionic/angular/standalone';
import { InputComponent } from "../components/input/input.component"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, InputComponent],
})

export class HomePage {
  @Output() type: string = "" 
  constructor() {}
}
