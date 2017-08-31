import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Dtos
import { CertificationItem } from '../../models/certification';
import {CertificationDetails} from '../../models/certification-details';

@Injectable()
export class CertificationsService {

  private _baseApiUrl='http://localhost/Transparency.Backoffice.API/api/certifications';

  constructor(private _http: Http) { }

  getAllCertifications(): Observable<Response> {
    return this._http.get(this._baseApiUrl);
  }

  getCertificationDetails(publicId: string): Observable<Response> {
    return this._http.get(this._baseApiUrl+'/'+publicId);
  }
}
