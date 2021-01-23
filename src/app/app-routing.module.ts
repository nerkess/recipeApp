import { AuthPage } from './auth/auth.page';
import { LanguagePopoverPage } from './pages/language-popover/language-popover.page';
import { NewRecipeComponent } from './pages/recipes/new-recipe/new-recipe.component';
import { HomePage } from './pages/home/home.page';
import { RecipesPage } from './pages/recipes/recipes.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage 
  },
  {
    path: '',
    component: HomePage,
    pathMatch: 'full' 
  },
  {
    path: 'recipes',
    children: [
      {
        path: ':folder',
        component: RecipesPage,
        children: [
          {
            path: 'new',
            component: NewRecipeComponent
          },
        ]
      }
    ]
  },
  {
    path: 'language-popover',
    component: LanguagePopoverPage
  },
  {
    path: 'home',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
