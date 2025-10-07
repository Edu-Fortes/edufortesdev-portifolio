import { IFeaturesData } from './IFeaturesData';

export interface ICardFeaturesProps {
  data: IFeaturesData;
  justify?: 'top' | 'center' | 'bottom';
  align?: 'left' | 'center' | 'right';
}
