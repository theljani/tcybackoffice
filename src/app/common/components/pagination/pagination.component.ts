import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  totalSize: number = 0;
  pageSize: number = 0;
  pagesIndexes: number[] = [0, 1, 2, 3, 4];
  currentIndex: number = 0;
  nextIndex: number = 0;
  previousIndex: number = 0;

  constructor() { }

  ngOnInit() { }

}
