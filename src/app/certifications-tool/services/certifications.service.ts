import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Certification } from '../models/certification';
import {CertificationDetails} from '../models/certification-details';

@Injectable()
export class CertificationsService {
  initialCertifications: Certification[] = [
      {
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA6",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)"
      },
      {
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign"
      },
      {    
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program"
      },
      {
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)"
      }
  ];

  certificationsWithDetails: CertificationDetails[] = [
      {
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA6",
        name: "CERTIFICATION 1",
        languageEn: "Agricultura Certificada (Aapresid)",
        languageFr: "Agricultura Certificada (Aapresid)",
        languageEs: "Agricultura Certificada (Aapresid)",
        languageZh: "Agricultura Certificada (Aapresid)",
        categories: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Category 1'
          },
          {
            publicId: '7DR5E560-4FFD-49B5-A417-A72394711234',
            name: 'Category 2'
          },
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Category 3'
          },
          {
            publicId: '7DR5E560-4FFD-49B5-A417-A72394711234',
            name: 'Category 4'
          }  
        ],
        activities: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Activity 1'
          },
          {
            publicId: '7DR5E560-4FFD-49B5-A417-A72394711234',
            name: 'Activity 2'
          },
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Activity 3'
          },
          {
            publicId: '7DR5E560-4FFD-49B5-A417-A72394711234',
            name: 'Activity 4'
          }  
        ],
        countries: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'France'
          },
          {
            publicId: '7DR5E560-4FFD-49B5-A417-A72394711234',
            name: 'Tunisie'
          },
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Turquie'
          }
        ],
        entityTypes: [
          'Facility',
          'ProductRef'
        ]
      },
      {
        publicId: "17B74053-7E34-4146-8036-73707BD0DBA5",
        name: "CERTIFICATION 2",
        languageEn: "bluesign",
        languageFr: "bluesign",
        languageEs: "bluesign",
        languageZh: "bluesign",
        categories: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Category 3'
          }
        ],
        activities: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Activity 1'
          }
        ],
        countries: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'China'
          },
        ],
        entityTypes: [
          'Facility'
        ]
      },
      {    
        publicId: "0EFE33B8-61A8-48C1-B624-7137F19FB8C8",
        name: "CERTIFICATION 3",
        languageEn: "Cargill Triple S Program",
        languageFr: "Cargill Triple S Program",
        languageEs: "Cargill Triple S Program",
        languageZh: "Cargill Triple S Program",
        categories: [
          {
            publicId: '9F29E560-4FFD-49B5-A417-A7239471AB8A',
            name: 'Category 4'
          }
        ],
        activities: [],
        countries: [],
        entityTypes: []
      },
      {
        publicId: "9CB6A7DA-0F83-44AC-8192-C6362C218236",
        name: "CERTIFICATION 4",
        languageEn: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageFr: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageEs: "EFI (EQUITABLE FOOD INITIATIVE)",
        languageZh: "EFI (EQUITABLE FOOD INITIATIVE)",
        categories: [],
        activities: [],
        countries: [],
        entityTypes: []
      }
  ];

  constructor() { }

  getAllCertifications(): Certification[] {
    return this.initialCertifications;
  }

  getCertificationDetails(publicId: string): CertificationDetails {
    return this.certificationsWithDetails.filter(item => {
      return item.publicId == publicId;
    })[0];
  }
}
