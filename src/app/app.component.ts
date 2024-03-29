import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PasswordMatchProvider } from '../providers/password-match/password-match';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html',
  providers:[PasswordMatchProvider]
})
export class MyApp {
  rootPage:string = 'LoginPage';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
      /*window.addEventListener('native.keyboardshow', (e) => {
        document.body.classList.add('keyboard-open');
      });*/

      window.addEventListener('native.keyboardshow', keyboardShowHandler);

      function keyboardShowHandler(e){
          document.body.classList.add('keyboard-open');
          alert('Keyboard height is: ' + e.keyboardHeight);
      }
        
      window.addEventListener('native.keyboardhide', () => {
        document.body.classList.remove('keyboard-open');
      });

      
      

    });
  }
}

