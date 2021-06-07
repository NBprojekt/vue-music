import { Artist } from "./artist.type";
import { Songs } from "./song.type";

export type Album = {
  name: string;
  image: string;
  lastPlayed: Date;
  artist: Artist;
  songs: Songs;
}

export type Albums = Array<Album>;
