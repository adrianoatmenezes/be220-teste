import { ContentConfig } from "./content-config";

export interface Content {
  id: number;
  title: string;
  contentConfig: ContentConfig[];
  isPersonal: boolean;
}
