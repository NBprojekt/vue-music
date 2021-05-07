import { Songs } from "./song.type";

export type Playlist = {
    uid: string;
    name: string;
    image: string;
    lastPlayed: Date;
    songs: Songs;
}

export type Playlists = Array<Playlist>;
