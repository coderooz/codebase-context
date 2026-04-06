export interface FileMeta {
  path: string;
  size: number;
  lines: number;
  ext: string;
  category: string;
  content?: string;
}

export interface Config {
  include: string[];
  ignore: string[];
  maxFileSizeKB: number;
  embedSource: boolean;
  priority: string[];
}