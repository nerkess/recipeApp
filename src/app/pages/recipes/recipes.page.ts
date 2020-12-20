import { Recipe } from './../../models/recipe';
import { RecipesService } from './../../services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];

  title: string;

  constructor(private route: ActivatedRoute, 
              private recipeService: RecipesService) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('detail');
    this.recipeService.recipes.subscribe(recipes => this.recipes = recipes);
  }

}
