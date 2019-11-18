import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  newAuthor:  any = {
    name: ""
  }
  errs: any = [];
  //@Input() newAuthor: any;

  constructor(
    private _httpService: HttpService,
    //private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    //this.newAuthor = {name: ""}
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['id'])
    // })
  }
  addAuthorEvent() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      if(data['errors']){
        if(data['errors']['name']['message'])
        this.errs.push(data['errors']['name']['message'])
        console.log("errors: ", this.errs)
      }
      else{
        console.log("Got data from post back!", data)
      
      this.newAuthor = {name: ""}
      this.goHome()
      }
    });
  }
  goHome() {
    this._router.navigate(['/']);
  }
}
