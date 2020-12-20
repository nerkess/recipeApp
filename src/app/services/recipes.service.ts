import { Recipe } from './../models/recipe';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private _recipes = new BehaviorSubject<Recipe[]>([
    {
      imgUrl: 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      time: '30 minutes',
      title: 'title',
      description: 'A tasty recipe'
    },
    {
      imgUrl: 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      time: '30 minutes',
      title: 'title',
      description: 'A tasty recipe'
    },
    {
      imgUrl: 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      time: '30 minutes',
      title: 'title',
      description: 'A tasty recipe'
    },
    {
      imgUrl: 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      time: '30 minutes',
      title: 'title',
      description: 'A tasty recipe'
    }
  ]);

  constructor(private http: HttpClient) { }

  get recipes(){
    return this._recipes;
  }
}
