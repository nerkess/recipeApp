import { AuthPageModule } from './auth/auth.module';
import { LanguagePopoverPage } from './pages/language-popover/language-popover.page';
import { NewRecipeComponent } from './pages/recipes/new-recipe/new-recipe.component';
import { ImagePickerComponent } from './shared/pickers/image-picker/image-picker.component';
import { RecipesPage } from './pages/recipes/recipes.page';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';

export function createTranslateLoader(http: HttpClient){
  return  new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    RecipesPage,
    LanguagePopoverPage,
    NewRecipeComponent,
    ImagePickerComponent
  ],
  entryComponents: [NewRecipeComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AuthPageModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
