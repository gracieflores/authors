import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  selectedAuthor: any;
  updatedAuthor: any = {
    name: ""
  }
  errs: any = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.getAuthor(params['id']);
    });
    //this.selectedAuthor
  }
  getAuthor(id) {
    let observable = this._httpService.getOneAuthor(id);
    observable.subscribe(data => {
      console.log("Got one author", data)
      this.selectedAuthor = data;
      console.log(this.selectedAuthor)
  })
}
  goHome() {
    this._router.navigate(['/']);
  }
  edit(id) {
    console.log(id)
    console.log(this.updatedAuthor)
    let observable = this._httpService.editAuthor(id, this.updatedAuthor);
    observable.subscribe(data => {
      if(data['errors']){
        if(data['errors']['name']['message'])
        this.errs.push(data['errors']['name']['message'])
        console.log("errors: ", this.errs)
      }
      else{
        console.log("Updated our Author!", data);
        this.updatedAuthor = { name: "" }
        
        this.goHome()
      }
    });
  }
  
}
