import { Component, OnInit } from '@angular/core';
import { DateUtil } from '@marquee/core/lib/util';

@Component( {
  selector: 'display-date',
  templateUrl: 'display-date.component.html'
} )

export class DisplayDateComponent implements OnInit {

  dateStrings: Array<string> = [
    "2023-10-01",
    "2023-10-02",
    "2023-10-03",
    "2023-10-04",
    "2023-10-05",
    "2023-10-06",
    "2023-10-07",
    "2023-10-08",
    "2023-10-09",
    "2023-10-10",
  ];

  dates: Array<Date> = [];

  constructor() {
  }

  ngOnInit() {
    this.dates = this.dateStrings.map( ( string: string ) => DateUtil.stringToDate( string ) );
  }
}
