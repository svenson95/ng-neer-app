import { PostElementType } from './element-type';

export interface PostElement {
  type: PostElementType | string;
  content?: string;
  hidden?: boolean;
  language?: 'java' | 'php' | 'javascript' | 'sql';
  list?: Array<SublistItem | string>;
  ordered?: boolean;
  rows?: TableRow[];
  object?: object;
  size?: string;
  elements?: PostElement[];
}

interface TableColumn {
  align: 'left' | 'middle' | 'right';
  content: string;
  colSpan?: number;
  rowSpan?: number;
}

interface TableRow {
  type: 'header' | 'default';
  columns: TableColumn[];
}

export interface SublistItem {
  content?: string;
  sublist: string[];
}
