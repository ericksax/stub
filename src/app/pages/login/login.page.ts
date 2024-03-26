import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from '../../components/button/button.component';
import { FormBuilder, FormControl, FormGroup, MinValidator, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  imports: [IonContent, InputComponent, ButtonComponent, ReactiveFormsModule]
})

export class LoginPage {
  loginForm!: FormGroup
  senha: string = ""
  login: string = ""

  submit() {
   console.log(this.loginForm.value)
  }

  constructor() {
    this.loginForm = new FormBuilder().group({
      login: new FormControl('', [Validators.required, Validators.minLength(11)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

}
