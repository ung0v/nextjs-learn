import { StaticImageData } from 'next/image';

export interface Work {
  imageUrl: StaticImageData;
  title: string;
  year: string;
  category: string;
  content: string;
}
