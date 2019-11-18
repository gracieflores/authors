import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorEditComponent,
    AllAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
