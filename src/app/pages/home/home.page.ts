import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from './../language-popover/language-popover.page';
import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recipes = [
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    },
    {
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Vermicelli-upma-recipe.jpg/220px-Vermicelli-upma-recipe.jpg'
    }
  ];

  constructor(private popoverCtrl: PopoverController, 
    private translate: TranslateService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(){
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('Header'),
      message: this.translate.instant('msg'),
      buttons: ['OK']
    }); 
    alert.present();
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}
