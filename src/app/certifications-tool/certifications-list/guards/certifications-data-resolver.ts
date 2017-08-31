

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

// Services
import { CertificationsService } from '../services/certifications.service';

// DTOs
import {CertificationItem} from '../../models/certification';

@Injectable()
export class CertificationsDataResolver implements Resolve<CertificationItem[]> {

    constructor(private _certificationsService: CertificationsService) {}

    resolve(route: ActivatedRouteSnapshot): CertificationItem[] {
        var certificationsList: CertificationItem[] = [];
        
        this._certificationsService.getAllCertifications()
        .subscribe(data => {
            certificationsList = data.json();
        });
        debugger
        return certificationsList;
    }
}