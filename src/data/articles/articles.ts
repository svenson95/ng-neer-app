import { PostElement } from 'src/app/core/models/post/element';
import {
  ANGULAR_ANIMATIONS,
  ANGULAR_CORE_COMPONENTS,
  ANGULAR_CORE_MODULES,
  ANGULAR_CORE_SERVICES,
  ANGULAR_MATERIAL_THEMING,
} from './index';

export interface Article {
  _id?: string;
  url: string;
  title: string;
  date: string;
  lastUpdate: string;
  elements: PostElement[];
}

export const TEST_ARTICLES: Array<Article> = [
  ANGULAR_ANIMATIONS,
  ANGULAR_CORE_COMPONENTS,
  ANGULAR_CORE_MODULES,
  ANGULAR_CORE_SERVICES,
  ANGULAR_MATERIAL_THEMING,
];
