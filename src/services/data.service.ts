import { Playlists } from "@/types/playlist.type";


export class DataService {

    public async getPlaylists(): Promise<Playlists> {
        // Fetch json file
        const response: Response = await fetch('./assets/data/playlists.json');
        const playlists: Playlists = await response.json();

        // Map iso string to date object
        playlists.map(x => x.lastPlayed = new Date(x.lastPlayed));

        // Order playlists desc by last played date
        playlists.sort((a, b) => a.lastPlayed < b.lastPlayed ? 1 : -1);

        console.log('Fetched playlists', playlists);
        return playlists;
    }
}

export const dataService = new DataService();
