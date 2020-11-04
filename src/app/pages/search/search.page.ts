import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {SearchService} from "../../core/services/search.service";
import {SearchResponse} from "../../core/models/search.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public searchResults: SearchResponse

  public searchForm = new FormGroup({
    query: new FormControl(''),
    types: new FormControl(['artist', 'track', 'album'])
  })
  public searchTypes = []

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  get query(): string {
    return this.searchForm.get('query').value
  }

  get types(): string {
    return this.searchForm.get('types').value.join()
  }

  public search() {
    this.searchService.search(this.query, this.types).subscribe(res => {
      console.log(res)
    })
  }
}
