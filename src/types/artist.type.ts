import { Albums } from './album.type';
import { Songs } from './song.type';

export type Artist = {
  name: string;
  image: string;
  lastPlayed: Date;
  songs?: Songs;
  albums?: Albums;
}

export type Artists = Array<Artist>;
