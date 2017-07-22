import {Component, ElementRef, ViewChild, OnInit, OnChanges} from '@angular/core';
import {MdPaginator, MdSort} from '@angular/material';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit, OnChanges {
  certificationsColumns = ['publicId', 'name'];
  CertificationsData = new CertificationsData();
  dataSource: CertificationDataSource | null;
  searchFilter: string;

  @ViewChild(MdPaginator) paginator: MdPaginator
  ngOnInit() {
    this.dataSource = new CertificationDataSource(this.CertificationsData, this.paginator);
  }

  ngOnChanges(changes: any): void {
    this.paginator.pageIndex = 0;
    var isDone = this.CertificationsData.filterChanged(this.searchFilter);
    if(isDone) {
      this.dataSource.filter= this.searchFilter;
    }
  }
}

export interface CertificationData {
  publicId: string;
  name: string;
}
             
export class CertificationsData {
  initialData = [
      {
        publicId: "D21C995A-2D24-4C59-B5A3-8E8C49586240",
        name: "CERTIFICATION 1"
      },
            {
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2"
      },
      {
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3"
      },
      {
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4"
      }
  ];

  dataChange: BehaviorSubject<CertificationData[]> = new BehaviorSubject<CertificationData[]>([]);
  get data(): CertificationData[] { return this.dataChange.value; }

    constructor() {
      this.initData();
  }

  filterChanged(filterValue: string): boolean {
    this.dataChange.next(this.initialData);
    if(filterValue && filterValue != "") {
        var data = this.data.slice().filter((item: CertificationData) => {
          let searchByName = (item.name).toLowerCase();
          let searchByGuid = (item.publicId).toLowerCase();
          return (searchByName.indexOf(filterValue.toLowerCase()) != -1) || (searchByGuid.indexOf(filterValue.toLowerCase()) != -1);
        }); 

        this.dataChange.next(data.slice());
    } else {
      this.initData();
    }

    return true;
  }

  initData() {
    this.dataChange.next(this.initialData);
  }
}


export class CertificationDataSource extends DataSource<any> {
    _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _CertificationDatabase: CertificationsData,
              private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CertificationData[]> {
    const displayDataChanges = [
      this._CertificationDatabase.dataChange,
      this._filterChange,
      this._paginator.page
    ];

    // return Observable.merge(...displayDataChanges).map(() => {
    //   const data = this._CertificationDatabase.data.slice();
      
    //   // Grab the page's slice of data.
    //   return data;
    // });

    return Observable.merge(...displayDataChanges).map(() => {
       var data = this._CertificationDatabase.data.slice().filter((item: CertificationData) => {
          let searchByName = (item.name).toLowerCase();
          let searchByGuid = (item.publicId).toLowerCase();
          return (searchByName.indexOf(this.filter.toLowerCase()) != -1) || (searchByGuid.indexOf(this.filter.toLowerCase()) != -1);
        });

        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}









