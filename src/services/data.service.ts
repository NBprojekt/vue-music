import { Playlists } from "@/types/playlist.type";


export default class DataService {

    public async getPlaylists(): Promise<Playlists> {
        const response = await fetch('./assets/data/playlists.json');
        const playlists = await response.json();

        return playlists;
    }
}
