import {Component, ElementRef, ViewChild, OnInit, OnChanges} from '@angular/core';
import {MdPaginator, MdSort, MdCheckbox, MdSidenavContainer, MdSidenav} from '@angular/material';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

// Child Components
import {EditCertificationComponent} from '../edit-certification/edit-certification.component';


@Component({
  selector: 'app-certifications-list',
  templateUrl: './certifications-list.component.html',
  styleUrls: ['./certifications-list.component.scss']
})
export class CertificationsListComponent implements OnInit, OnChanges {
  certificationsColumns = ['checkAll', 'name', 'languageEn', 'languageFr', 'languageEs', 'languageZh'];
  CertificationsData = new CertificationsData();
  dataSource: CertificationDataSource | null;
  searchFilter: string;
  selectedCertification: Certification;

  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdSidenav) newCertifSideNav: MdSidenav;

  @ViewChild(EditCertificationComponent) CertificationchildComponent: EditCertificationComponent;

  ngOnInit() {
    this.dataSource = new CertificationDataSource(this.CertificationsData, this.paginator, this.sort);
  }

  ngOnChanges(changes: any): void {
    this.paginator.pageIndex = 0;
    var isDone = this.CertificationsData.filterChanged(this.searchFilter);
    if(isDone) {
      this.dataSource.filter= this.searchFilter;
    }
  }

  onCheckAllChanges(event) {
    this.selectedCertification = undefined;
    this.dataSource.getFilteredData(this.CertificationsData.data).map((item: Certification) => {
      item.isChecked = event.checked;
    });
  }

  onCheckboxChecked(selected:Certification) {
    if(selected.isChecked) {
      this.selectedCertification = selected;
    } else {
      this.selectedCertification = undefined;
    }
  }

  clearFilter() {
    this.searchFilter = "";
    this.ngOnChanges(null);
  }

  CertificationSideNavClose(event) {
    this.newCertifSideNav.close();
  }
}

export interface Certification {
  isChecked: boolean;
  publicId: string;
  name: string;
  languageEn: string;
  languageFr: string;
  languageEs: string;
  languageZh: string;
}
             
export class CertificationsData {
  initialData = [
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA6",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {
        isChecked: false,        
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
                isChecked: false,    
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      },
      {
                isChecked: false,    
        publicId: "FF8EDACB-BB38-4A96-B392-10C4C3A14564",
        name: "CERTIFICATION 5",
        languageEn: "FairWild",
        languageFr: "FairWild",
        languageEs: "FairWild",
        languageZh: "FairWild"
      },
            {
                      isChecked: false,    
        publicId: "EAEBE7A0-4D93-4982-95F4-D695C34C0641",
        name: "CERTIFICATION 6",
        languageEn: "Bonsucro",
        languageFr: "Bonsucro",
        languageEs: "Bonsucro",
        languageZh: "Bonsucro"
      },
      {
                isChecked: false,    
        publicId: "E43234A5-57DB-4EEF-A767-0C4C7129A9A8",
        name: "CERTIFICATION 7",
        languageEn: "BEMEFA soy standard",
        languageFr: "BEMEFA soy standard",
        languageEs: "BEMEFA soy standard",
        languageZh: "BEMEFA soy standard"
      },
      {
                isChecked: false,    
        publicId: "1F29E85B-9F16-4CA5-BC35-1C4F80CA498E",
        name: "CERTIFICATION 8",
        languageEn: "BCI (Better Cotton Initiative)",
        languageFr: "BCI (Better Cotton Initiative)",
        languageEs: "BCI (Better Cotton Initiative)",
        languageZh: "BCI (Better Cotton Initiative)"
      },
      {
        isChecked: false,
        publicId: "D21C995A-2D24-4C59-B5A3-8E8C49586240",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {
        isChecked: false,        
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
                isChecked: false,    
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      },
      {
                isChecked: false,    
        publicId: "FF8EDACB-BB38-4A96-B392-10C4C3A14564",
        name: "CERTIFICATION 5",
        languageEn: "FairWild",
        languageFr: "FairWild",
        languageEs: "FairWild",
        languageZh: "FairWild"
      },
            {
                      isChecked: false,    
        publicId: "EAEBE7A0-4D93-4982-95F4-D695C34C0641",
        name: "CERTIFICATION 6",
        languageEn: "Bonsucro",
        languageFr: "Bonsucro",
        languageEs: "Bonsucro",
        languageZh: "Bonsucro"
      },
      {
                isChecked: false,    
        publicId: "E43234A5-57DB-4EEF-A767-0C4C7129A9A8",
        name: "CERTIFICATION 7",
        languageEn: "BEMEFA soy standard",
        languageFr: "BEMEFA soy standard",
        languageEs: "BEMEFA soy standard",
        languageZh: "BEMEFA soy standard"
      },
      {
                isChecked: false,    
        publicId: "1F29E85B-9F16-4CA5-BC35-1C4F80CA498E",
        name: "CERTIFICATION 8",
        languageEn: "BCI (Better Cotton Initiative)",
        languageFr: "BCI (Better Cotton Initiative)",
        languageEs: "BCI (Better Cotton Initiative)",
        languageZh: "BCI (Better Cotton Initiative)"
      },
      {
        isChecked: false,
        publicId: "D21C995A-2D24-4C59-B5A3-8E8C49586240",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {
        isChecked: false,        
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
                isChecked: false,    
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      },
      {
                isChecked: false,    
        publicId: "FF8EDACB-BB38-4A96-B392-10C4C3A14564",
        name: "CERTIFICATION 5",
        languageEn: "FairWild",
        languageFr: "FairWild",
        languageEs: "FairWild",
        languageZh: "FairWild"
      },
            {
                      isChecked: false,    
        publicId: "EAEBE7A0-4D93-4982-95F4-D695C34C0641",
        name: "CERTIFICATION 6",
        languageEn: "Bonsucro",
        languageFr: "Bonsucro",
        languageEs: "Bonsucro",
        languageZh: "Bonsucro"
      },
      {
                isChecked: false,    
        publicId: "E43234A5-57DB-4EEF-A767-0C4C7129A9A8",
        name: "CERTIFICATION 7",
        languageEn: "BEMEFA soy standard",
        languageFr: "BEMEFA soy standard",
        languageEs: "BEMEFA soy standard",
        languageZh: "BEMEFA soy standard"
      },
      {
                isChecked: false,    
        publicId: "1F29E85B-9F16-4CA5-BC35-1C4F80CA498E",
        name: "CERTIFICATION 8",
        languageEn: "BCI (Better Cotton Initiative)",
        languageFr: "BCI (Better Cotton Initiative)",
        languageEs: "BCI (Better Cotton Initiative)",
        languageZh: "BCI (Better Cotton Initiative)"
      },
      {
        isChecked: false,
        publicId: "D21C995A-2D24-4C59-B5A3-8E8C49586240",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {
        isChecked: false,        
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
                isChecked: false,    
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      },
      {
                isChecked: false,    
        publicId: "FF8EDACB-BB38-4A96-B392-10C4C3A14564",
        name: "CERTIFICATION 5",
        languageEn: "FairWild",
        languageFr: "FairWild",
        languageEs: "FairWild",
        languageZh: "FairWild"
      },
            {
                      isChecked: false,    
        publicId: "EAEBE7A0-4D93-4982-95F4-D695C34C0641",
        name: "CERTIFICATION 6",
        languageEn: "Bonsucro",
        languageFr: "Bonsucro",
        languageEs: "Bonsucro",
        languageZh: "Bonsucro"
      },
      {
                isChecked: false,    
        publicId: "E43234A5-57DB-4EEF-A767-0C4C7129A9A8",
        name: "CERTIFICATION 7",
        languageEn: "BEMEFA soy standard",
        languageFr: "BEMEFA soy standard",
        languageEs: "BEMEFA soy standard",
        languageZh: "BEMEFA soy standard"
      },
      {
                isChecked: false,    
        publicId: "1F29E85B-9F16-4CA5-BC35-1C4F80CA498E",
        name: "CERTIFICATION 8",
        languageEn: "BCI (Better Cotton Initiative)",
        languageFr: "BCI (Better Cotton Initiative)",
        languageEs: "BCI (Better Cotton Initiative)",
        languageZh: "BCI (Better Cotton Initiative)"
      },
      {
        isChecked: false,
        publicId: "D21C995A-2D24-4C59-B5A3-8E8C49586240",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        isChecked: false,
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {
        isChecked: false,        
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
                isChecked: false,    
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      },
      {
                isChecked: false,    
        publicId: "FF8EDACB-BB38-4A96-B392-10C4C3A14564",
        name: "CERTIFICATION 5",
        languageEn: "FairWild",
        languageFr: "FairWild",
        languageEs: "FairWild",
        languageZh: "FairWild"
      },
            {
                      isChecked: false,    
        publicId: "EAEBE7A0-4D93-4982-95F4-D695C34C0641",
        name: "CERTIFICATION 6",
        languageEn: "Bonsucro",
        languageFr: "Bonsucro",
        languageEs: "Bonsucro",
        languageZh: "Bonsucro"
      },
      {
                isChecked: false,    
        publicId: "E43234A5-57DB-4EEF-A767-0C4C7129A9A8",
        name: "CERTIFICATION 7",
        languageEn: "BEMEFA soy standard",
        languageFr: "BEMEFA soy standard",
        languageEs: "BEMEFA soy standard",
        languageZh: "BEMEFA soy standard"
      },
      {
                isChecked: false,    
        publicId: "1F29E85B-9F16-4CA5-BC35-1C4F80CA498E",
        name: "CERTIFICATION 8",
        languageEn: "BCI (Better Cotton Initiative)",
        languageFr: "BCI (Better Cotton Initiative)",
        languageEs: "BCI (Better Cotton Initiative)",
        languageZh: "BCI (Better Cotton Initiative)"
      }
  ];

  dataChange: BehaviorSubject<Certification[]> = new BehaviorSubject<Certification[]>([]);
  get data(): Certification[] { return this.dataChange.value; }

    constructor() {
      this.initData();
  }

  filterChanged(filterValue: string): boolean {
    this.dataChange.next(this.initialData);
    if(filterValue && filterValue != "") {
        var data = this.data.slice().filter((item: Certification) => {
          let searchByName = (item.name).toLowerCase();
          let searchByGuid = (item.publicId).toLowerCase();
          let searchByEnTerm = (item.languageEn).toLowerCase();
          let searchByFrTerm = (item.languageFr).toLowerCase();
          let searchByEsTerm = (item.languageEs).toLowerCase();
          let searchByZhTerm = (item.languageZh).toLowerCase();

          return (searchByName.indexOf(filterValue.toLowerCase()) != -1) 
          || (searchByGuid.indexOf(filterValue.toLowerCase()) != -1)
          || (searchByEnTerm.indexOf(filterValue.toLowerCase()) != -1)
          || (searchByFrTerm.indexOf(filterValue.toLowerCase()) != -1)
          || (searchByEsTerm.indexOf(filterValue.toLowerCase()) != -1)
          || (searchByZhTerm.indexOf(filterValue.toLowerCase()) != -1);
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
              private _paginator: MdPaginator,
              private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Certification[]> {
    const displayDataChanges = [
      this._CertificationDatabase.dataChange,
      this._filterChange,
      this._paginator.page,
      this._sort.mdSortChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
       return this.getFilteredData(this._CertificationDatabase.data);
    });
  }

  getFilteredData(dataToFilter): Certification[] {
    var data = dataToFilter.slice().filter((item: Certification) => {
      
      let searchByName = (item.name).toLowerCase();
      let searchByGuid = (item.publicId).toLowerCase();
      let searchByEnTerm = (item.languageEn).toLowerCase();
      let searchByFrTerm = (item.languageFr).toLowerCase();
      let searchByEsTerm = (item.languageEs).toLowerCase();
      let searchByZhTerm = (item.languageZh).toLowerCase();

      return (searchByName.indexOf(this.filter.toLowerCase()) != -1) 
      || (searchByGuid.indexOf(this.filter.toLowerCase()) != -1)
      || (searchByEnTerm.indexOf(this.filter.toLowerCase()) != -1)
      || (searchByFrTerm.indexOf(this.filter.toLowerCase()) != -1)
      || (searchByEsTerm.indexOf(this.filter.toLowerCase()) != -1)
      || (searchByZhTerm.indexOf(this.filter.toLowerCase()) != -1);
    });

    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
    var paginatedData = data.splice(startIndex, this._paginator.pageSize);

    return this.getSortedData(paginatedData);
  }

  getSortedData(data): Certification[] {
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let isAsc = this._sort.direction == 'asc';
      switch (this._sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'languageEn': return this.compare(a.languageEn, b.languageEn, isAsc);
        case 'languageFr': return this.compare(a.languageFr, b.languageFr, isAsc);
        case 'languageEs': return this.compare(a.languageEs, b.languageEs, isAsc);
        case 'languageZh': return this.compare(a.languageZh, b.languageZh, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: string, b:string, isAsc: boolean): number {
    return (a.toLowerCase() < b.toLowerCase() ? -1 : 1) * (isAsc ? 1 : -1);
  }

  disconnect() {}
}









