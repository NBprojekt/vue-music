import { Song } from "@/types/song.type";


export class PlayerService {

    public getCurrentSong(): Song {
        return {
          uid: '123a3sHn64dGer',
          name: 'In the End',
          author: 'Linking Park',
          file: '',
          length: 240,
          image: '',
          canvas: '',
        };
    }

}

export const playerService = new PlayerService();
