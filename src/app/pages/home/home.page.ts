import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class HomePage implements OnInit {
  constructor(private route: Router) { }

  goToLogin() {
    this.route.navigate(['/login'])
  }

  goToRegister() {
    this.route.navigate(['/register'])
  }

  goToRegisterDocument() {
    this.route.navigate(['/register-document'])
  }

  ngOnInit() {
  }

}
