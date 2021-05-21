export type Song = {
    uid: string;
    name: string;
    author: string;
    file: string;
    length?: number;
    image: string;
    canvas?: string;
}

export type Songs = Array<Song>;
