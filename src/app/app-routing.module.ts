import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 /* {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },*/
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: ':detail',
        loadChildren: () => import('./pages/recipes/recipes.module').then( m => m.RecipesPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
