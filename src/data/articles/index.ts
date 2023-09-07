export { ANGULAR_CORE_COMPONENTS } from './angular-core-compoents';
export { ANGULAR_CORE_MODULES } from './angular-core-modules';
export { ANGULAR_CORE_SERVICES } from './angular-core-services';
export { ANGULAR_CORE_CHANGE_DETECTION_REF } from "./angular-core-change-detection-ref";
export { ANGULAR_CORE_CHANGE_DETECTION_STRATEGY } from "./angular-core-change-detection-strategy";
export { ANGULAR_ANIMATIONS } from './angular-animations';
export { ANGULAR_MATERIAL_COMPONENTS_STEPPER } from './angular-material-components-stepper';
export { ANGULAR_MATERIAL_THEMING } from './angular-material-theming';
export { GET_STARTED_WITH_ANGULAR } from './get-started-with-angular';

import { PostElement } from 'src/app/core/models/post/element';
import {
  ANGULAR_ANIMATIONS,
  ANGULAR_CORE_CHANGE_DETECTION_REF,
  ANGULAR_CORE_CHANGE_DETECTION_STRATEGY,
  ANGULAR_CORE_COMPONENTS,
  ANGULAR_CORE_MODULES,
  ANGULAR_CORE_SERVICES,
  ANGULAR_MATERIAL_COMPONENTS_STEPPER,
  ANGULAR_MATERIAL_THEMING,
  GET_STARTED_WITH_ANGULAR,
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
  GET_STARTED_WITH_ANGULAR,
  ANGULAR_CORE_MODULES,
  ANGULAR_CORE_COMPONENTS,
  ANGULAR_CORE_SERVICES,
  ANGULAR_CORE_CHANGE_DETECTION_REF,
  ANGULAR_CORE_CHANGE_DETECTION_STRATEGY,
  ANGULAR_ANIMATIONS,
  ANGULAR_MATERIAL_COMPONENTS_STEPPER,
  ANGULAR_MATERIAL_THEMING,
];
