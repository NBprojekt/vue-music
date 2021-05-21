export type Song = {
    uid: string;
    title: string;
    author: string;
    file: string;
    length?: number;
    image: string;
    canvas?: string;
}

export type Songs = Array<Song>;
