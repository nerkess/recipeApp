import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService,
              private storage: Storage) { }

  setInitialAppLanguage(){
    this.translate.setDefaultLang(this.translate.getBrowserLang());

    this.storage.get(LNG_KEY).then(val => {
      if(val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages(){
    return [
      { text: 'English', value: 'en' },
      { text: 'Deutsch', value: 'de' },
      { text: 'Rus', value: 'ru' },
      { text: 'Basch', value: 'ba' },
    ];
  }

  setLanguage(lng){
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
