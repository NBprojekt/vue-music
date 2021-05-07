import { Playlists } from "@/types/playlist.type";


export class DataService {

    public async getPlaylists(): Promise<Playlists> {
        const response = await fetch('./assets/data/playlists.json');
        const playlists = await response.json();
        
        console.log('Fetched playlists', playlists);

        return playlists;
    }
}

export const dataService = new DataService();
