import {ItemModel} from './item-model';

export interface CertificationDetails {
  publicId: string;
  name: string;
  languageEn: string;
  languageFr: string;
  languageEs: string;
  languageZh: string;
  categories: ItemModel[],
  activities: ItemModel[],
  countries: ItemModel[],
  entityTypes: string[]
}