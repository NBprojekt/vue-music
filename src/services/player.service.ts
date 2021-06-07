import { Song } from "@/types/song.type";
import { BehaviorSubject, Observable } from "rxjs";


export class PlayerService {
  private currentSong: BehaviorSubject<Song | null>;

  private _isPlaying: BehaviorSubject<boolean>;
  private _isShuffling: BehaviorSubject<boolean>;
  private _isRepeating: BehaviorSubject<boolean>;
  private _isRepeatingOnlyOne: BehaviorSubject<boolean>;

  constructor() {
    this.currentSong = new BehaviorSubject<Song | null>(null);

    this._isPlaying = new BehaviorSubject<boolean>(false);
    this._isShuffling = new BehaviorSubject<boolean>(false);
    this._isRepeating = new BehaviorSubject<boolean>(false);
    this._isRepeatingOnlyOne = new BehaviorSubject<boolean>(false);

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

  public togglePlaying(): void {
    this._isPlaying.next(!this._isPlaying.value);
  }
  public toggleShuffle(): void {
    this._isShuffling.next(!this._isShuffling.value);
  }
  public toggleRepeat(): void {

    if (!this._isRepeating.value) {
      this._isRepeating.next(true);
    } else if (!this._isRepeatingOnlyOne.value) {
      this._isRepeatingOnlyOne.next(true);
    } else {
      this._isRepeating.next(false);
      this._isRepeatingOnlyOne.next(false);
    }
  }

  public isPlaying(): Observable<boolean> {
    return this._isPlaying.asObservable();
  }
  public isShuffling(): Observable<boolean> {
    return this._isShuffling.asObservable();
  }
  public isRepeating(): Observable<boolean> {
    return this._isRepeating.asObservable();
  }
  public isRepeatingOnlyOne(): Observable<boolean> {
    return this._isRepeatingOnlyOne.asObservable();
  }
}

export const playerService = new PlayerService();
