import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { Recipe } from './../../models/recipe';
import { RecipesService } from './../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];
  private subscription: Subscription;
  isLoading = false;
  title: string;

  constructor(private route: ActivatedRoute, 
              private recipeService: RecipesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('detail');
    // this.subscription = this.recipeService.recipes.subscribe(recipes => {
      //this.recipes = recipes;
      //console.log('this: ', this.recipes);
    //});
  }

  ionViewWillEnter(){
    this.isLoading = true;
    //this.recipeService.fetchRecipes().subscribe(() => {
      //this.isLoading = false;
    //});
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  addRecipe(){
    this.modalCtrl.create({component: NewRecipeComponent})
    .then(modalEl => {
      modalEl.present();
    });
  }
}
