import { Observable } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  authenticate(email: string, password: string){
    this.isLoading = true;
    this.authService.login(email, password);
    this.loadingCtrl
      .create({keyboardClose: true, message: 'Logging in...'})
      .then(loadingEl => {
        loadingEl.present();
        const authObs: Observable<AuthResponseData> = this.authService.login(email,password);

        authObs.subscribe(
          resData => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/home');
          },
          errRes => {
            loadingEl.dismiss();
            const code = errRes.error.error.message;
            let message = 'Could not sign you in, please try again.';
            if(code === 'EMAIL_NOT_FOUND'){
              message = 'E-Mail address could not be found.';
            }else if(code === 'INVALID_PASSWORD'){
              message = 'This password is not correct.';
            }
            this.showAlert(message);
          }
        );
      });
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authenticate(email, password);
  }

  private showAlert(message: string){
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
