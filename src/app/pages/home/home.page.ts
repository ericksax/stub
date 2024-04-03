import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class HomePage {
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

  async scan() {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
     console.log(result.content);
    }
  }


  }


