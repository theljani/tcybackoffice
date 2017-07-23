import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResolveGuard implements Resolve<any> {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //     var company
  //   return true;
  // }
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
                isChecked: true,    
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

  resolve(route: ActivatedRouteSnapshot): any {
    debugger
    let publicId = route.url[2].path;
    var certification = this.initialData.filter((item: any) => {
      return item.publicId == publicId;
    })[0];

    return certification;
  }
}
