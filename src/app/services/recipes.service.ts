import { Recipe, RecipeData } from './../models/recipe';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
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

  fetchRecipes(folder: string){
    return this.http.get<{[key: string]: RecipeData}>('https://recipelorenzapp-default-rtdb.firebaseio.com/' + folder + '.json')
    .pipe(map(response => {
      const recipes = [];
      console.log('Response: ', response);
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

  addRecipe(title: string, desc: string, time: string, folder: string){
    let generatedId: string;
    const newRecipe = new Recipe(Math.random.toString(),
                                'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg', 
                                title, 
                                desc, 
                                time);

    return this.http.post<{name: string}>('https://recipelorenzapp-default-rtdb.firebaseio.com/' + folder + '.json', {...newRecipe, id: null})
    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this._recipes;
      }),
      take(1),
      tap(recipes => {
        newRecipe.id = generatedId;
        this._recipes.next(recipes.concat(newRecipe));
      })
    );
  }
}
