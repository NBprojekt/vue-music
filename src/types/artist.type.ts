import { Songs } from "./song.type";

export type Artist = {
    name: string;
    image: string;
    lastPlayed: Date;
    songs: Songs;
}

export type Artists = Array<Artist>;
