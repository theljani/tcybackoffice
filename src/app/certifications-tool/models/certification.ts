export interface Certification {
  publicId: string;
  name: string;
  languageEn: string;
  languageFr: string;
  languageEs: string;
  languageZh: string;
}


export interface CertificationItem {
  publicId: string;
  name: string;
  activities: any[];
  categories: any[];
  countries: any[];
  entityTypes: any[];
}