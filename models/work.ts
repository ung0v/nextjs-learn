import { StaticImageData } from 'next/image';

export interface Work {
  id: string;
  imageUrl: StaticImageData;
  title: string;
  year: string;
  category: string;
  content: string;
}
