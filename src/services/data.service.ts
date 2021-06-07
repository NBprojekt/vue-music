import { Artists } from "@/types/artist.type";
import { Playlists } from "@/types/playlist.type";

export class DataService {

    public async getPlaylists(): Promise<Playlists> {
        // Fetch json file
        const url = `${process.env.VUE_APP_BASE_HREF}assets/data/playlists.json`;
        const response: Response = await fetch(url);
        const playlists: Playlists = await response.json();

        // Map iso string to date object and relative image url
        playlists.map(x => {
          x.lastPlayed = new Date(x.lastPlayed);
          x.image = x.image.replace('/', process.env.VUE_APP_BASE_HREF);
        });

        // Order playlists desc by last played date
        playlists.sort((a, b) => a.lastPlayed < b.lastPlayed ? 1 : -1);

        return playlists;
    }

    public async getArtists(): Promise<Artists> {
        // Fetch json file
        const url = `${process.env.VUE_APP_BASE_HREF}assets/data/playlists.json`;
        const response: Response = await fetch(url);
        const artists: Artists = await response.json();

        // Map iso string to date object and relative image url
        artists.map(x => {
          x.lastPlayed = new Date(x.lastPlayed);
          x.image = x.image.replace('/', process.env.VUE_APP_BASE_HREF);
        });

        // Order playlists desc by last played date
        artists.sort((a, b) => a.lastPlayed < b.lastPlayed ? 1 : -1);

        return artists;
    }
}

export const dataService = new DataService();
