import { Recipe, RecipeData } from './../models/recipe';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) { }

  get recipes(){
    return this._recipes.asObservable();
  }

  fetchRecipes(){
    return this.http.get<{[key: string]: RecipeData}>('https://recipelorenzapp-default-rtdb.firebaseio.com/big-hunger.json')
    .pipe(map(response => {
      const recipes = [];
      for(const key in response){
        if(response.hasOwnProperty(key)){
          recipes.push(new Recipe(key, response[key].imgUrl, response[key].title, response[key].time, response[key].description))
        }
      }
      return recipes;
    }),
    tap(recipes => {
      this._recipes.next(recipes);
    })
    );
  }

  /*storeRecipes(){
    this._recipes.forEach(recipe => {
      this.http.post('https://recipelorenzapp-default-rtdb.firebaseio.com/big-hunger.json', {...recipe, id: null}).subscribe(response => {
        console.log(response);
      });
    });
  }*/
}
