import { Component, OnInit, Input } from '@angular/core';
import { Drive } from '../driving.model';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent implements OnInit {

  @Input() drive: Drive[] = new Array<Drive>();

  constructor() { }

  ngOnInit(): void {
  }

}
