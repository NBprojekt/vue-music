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

        console.log('Fetched playlists', playlists);
        return playlists;
    }

    public async getArtists(): Promise<Artists> {
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

        console.log('Fetched artists', playlists);
        return playlists;
    }
}

export const dataService = new DataService();
