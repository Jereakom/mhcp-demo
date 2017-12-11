import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-professional-view',
  templateUrl: './professional-view.component.html',
  styleUrls: ['./professional-view.component.css']
})
export class ProfessionalViewComponent implements OnInit {

  time: any;

  professionals: any;

  dateSearched: any;

  closeResult: string;

  constructor(private modalService: NgbModal, private http: HttpClient) { }

  open(content) {
    this.modalService.open(content)
  }

  book(time: string){
    this.time = time;
    console.log(time);
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/professionals').subscribe(data => {

      this.professionals = data;

      console.log(data);
    });
  }

}
