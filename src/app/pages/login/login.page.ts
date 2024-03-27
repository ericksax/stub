import { Component, KeyValueDiffers } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from '../../components/button/button.component';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: true,
  providers: [
    LoginService
  ],
  imports: [IonContent, InputComponent, ButtonComponent, ReactiveFormsModule, NgIf]
})

export class LoginPage {
  loginForm!: FormGroup
  password: string = ""
  login: string = ""
  
  constructor(private loginService : LoginService, private router: Router, private toastController: ToastController) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      color: 'danger',
      position: position,
    });
  
    await toast.present();
  }
    
  submit() {
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      next: () => {
        this.router.navigate(['home'])
      },
      error: () => {
        this.presentToast('top', 'Login ou senha inválidos')
    }})
  }
}


