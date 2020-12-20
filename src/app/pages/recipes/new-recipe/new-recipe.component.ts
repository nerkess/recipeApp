import { PhotoService } from './../../../services/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {}

  addPhoto(){
    this.photoService.addNewToGallery();
  }
}
