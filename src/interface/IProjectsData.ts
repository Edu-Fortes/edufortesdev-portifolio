import { IImage } from './IImage';
import { ITechBadges } from './ITechBadges';

export interface IProjectsData {
  id: number;
  img: IImage;
  title: string;
  description: string;
  badges: ITechBadges[];
  liveSiteURL: string;
}
