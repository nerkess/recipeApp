import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from './../../../services/recipes.service';
import { PhotoService } from './../../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
})
export class NewRecipeComponent implements OnInit {

  form: FormGroup;

  constructor(public photoService: PhotoService,
              private route: ActivatedRoute, 
              private router: Router,
              private recipeService: RecipesService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('detail'));
    this.form = new FormGroup({
        title: new FormControl(null, {
        updateOn: 'blur', 
        validators: [Validators.required]
      }),
        desc: new FormControl(null, {
        updateOn: 'blur', 
        validators: [Validators.required]
      }),
        time: new FormControl(null, {
        updateOn: 'blur', 
        validators: [Validators.required]
      })
    });
  }

  addPhoto(){
    if(!this.form.valid){
      return;
    }
    this.loadingCtrl.create({
      message: 'Adding photo...'
    })
    .then(loadingEl => {
      loadingEl.present();
      this.recipeService.addRecipe(this.form.value.title, this.form.value.desc, this.form.value.time, this.route.snapshot.paramMap.get('detail'))
                        .subscribe(() => {
                          loadingEl.dismiss();
                          this.form.reset();
                          this.router.navigate(['/recipes']);
                        });
    });
  }
}
