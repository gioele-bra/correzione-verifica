import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Drive } from '../driving.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

  driveList : Drive[] = new Array<Drive>();

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Drive[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi").subscribe(
      (auto: Drive[]) => {
        this.driveList = auto;
      }
    );
  }

  onClick(auto: Drive): boolean{

    return false;
  }

}
