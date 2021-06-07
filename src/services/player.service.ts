import { Song } from "@/types/song.type";
import { BehaviorSubject, Observable } from "rxjs";


export class PlayerService {
  private currentSong: BehaviorSubject<Song | null>;

  constructor() {
    this.currentSong = new BehaviorSubject<Song | null>(null);

    // For development
    this.setSong({
      uid: '123a3sHn64dGer',
      title: 'In the End',
      author: 'Linking Park',
      file: '',
      length: 240,
      image: `${process.env.VUE_APP_BASE_HREF}assets/images/playlist_1.jpg`,
      // canvas: `${process.env.VUE_APP_BASE_HREF}assets/videos/test.gif`,
    });
  }

  public setSong(song: Song): void {
    this.currentSong.next(song);
  }

  public getSong(): Observable<Song | null> {
    return this.currentSong.asObservable();
  }
}

export const playerService = new PlayerService();
