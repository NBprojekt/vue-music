import { Song } from "@/types/song.type";


export class PlayerService {

    public getCurrentSong(): Song {
        return {
          uid: '123a3sHn64dGer',
          title: 'In the End',
          author: 'Linking Park',
          file: '',
          length: 240,
          image: '/assets/images/playlist_1.jpg',
          // canvas: '/assets/videos/test.gif',
        };
    }

}

export const playerService = new PlayerService();