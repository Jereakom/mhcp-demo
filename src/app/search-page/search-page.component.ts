import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  search(treatment: string, bodypart: string, location: string, date: string, sex: string, age: number, languages: string) {
    console.log("treatment: "+ treatment +" bodypart: "+bodypart+" location: "+location+" date: "+date+ " sex: "+sex+" age: "+age+" languages: "+languages   );
  }

  constructor() { }

  ngOnInit() {
  }

}
