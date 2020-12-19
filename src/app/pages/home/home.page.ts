import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
