import {
  ARTICLE_PREFIX_START,
  START_CLASSES,
  START_CONCEPTS,
  START_INIT_PROJECT
} from "@data/articles/start";
export {
  START_CLASSES,
  START_CONCEPTS,
  START_INIT_PROJECT
} from '@data/articles/start';

import {
  ARTICLE_PREFIX_FUNDAMENTALS,
  FUNDAMENTALS_CHANGE_DETECTION_STRATEGY,
  FUNDAMENTALS_CHANGE_DETECTION_REF,
  FUNDAMENTALS_COMPONENTS,
  FUNDAMENTALS_MODULES,
  FUNDAMENTALS_SERVICES, FUNDAMENTALS_COMPONENTS_LIFE_CYCLES
} from "@data/articles/fundamentals";
export {
  FUNDAMENTALS_COMPONENTS,
  FUNDAMENTALS_MODULES,
  FUNDAMENTALS_SERVICES,
  FUNDAMENTALS_CHANGE_DETECTION_REF,
  FUNDAMENTALS_CHANGE_DETECTION_STRATEGY
} from '@data/articles/fundamentals';

import {
  ARTICLE_PREFIX_ADVANCED,
  ADVANCED_ANIMATIONS
} from '@data/articles/advanced';
export {
  ADVANCED_ANIMATIONS,
} from '@data/articles/advanced';

import {
  ARTICLE_PREFIX_ECOSYSTEM,
  ECOSYSTEM_ANGULAR_MATERIAL_THEMING,
  ECOSYSTEM_ANGULAR_MATERIAL_COMPONENTS_STEPPER
} from "@data/articles/ecosystem";
export {
  ECOSYSTEM_ANGULAR_MATERIAL_COMPONENTS_STEPPER,
  ECOSYSTEM_ANGULAR_MATERIAL_THEMING
} from '@data/articles/ecosystem';

import { PostElement } from '@modules/article/models';
export interface Article {
  _id?: string;
  url: string;
  title: string;
  date: string;
  lastUpdate: string;
  elements: PostElement[];
}

export const TEST_ARTICLES: Array<Article> = [
  START_CLASSES,
  START_CONCEPTS,
  START_INIT_PROJECT,
  FUNDAMENTALS_MODULES,
  FUNDAMENTALS_COMPONENTS,
  FUNDAMENTALS_COMPONENTS_LIFE_CYCLES,
  FUNDAMENTALS_SERVICES,
  FUNDAMENTALS_CHANGE_DETECTION_REF,
  FUNDAMENTALS_CHANGE_DETECTION_STRATEGY,
  ADVANCED_ANIMATIONS,
  ECOSYSTEM_ANGULAR_MATERIAL_COMPONENTS_STEPPER,
  ECOSYSTEM_ANGULAR_MATERIAL_THEMING,
];

import { RoadmapCategory } from "@modules/roadmap/models";
export const ROADMAP_CATEGORIES = {
  [RoadmapCategory.START]: ARTICLE_PREFIX_START,
  [RoadmapCategory.FUNDAMENTALS]: ARTICLE_PREFIX_FUNDAMENTALS,
  [RoadmapCategory.ADVANCED]: ARTICLE_PREFIX_ADVANCED,
  [RoadmapCategory.ECOSYSTEM]: ARTICLE_PREFIX_ECOSYSTEM,
}
