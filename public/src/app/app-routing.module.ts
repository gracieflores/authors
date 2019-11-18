import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AppComponent } from './app.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'new', component: AuthorComponent},
  { path: 'edit/:id', component: AuthorEditComponent},
  { path: '', component: AllAuthorsComponent}
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
