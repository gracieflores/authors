import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  authors = [];
  author: any;
  newAuthor: any;
  selectedAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
    //this.newAuthor = { name: ""}
  }
  getAll() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      console.log("Got our authors!", data)
      this.authors = data['data'];
    });
  }
  delete(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Got data to delete Author!", data);
    })
    this.getAll();
  }
  
}
