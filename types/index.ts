import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchMoviesProps {
    genres: string;
    setGenres: (genres: string) => void;
}

export interface MovieProps {
    rank: number;
    title: string;
    thumbnail: string;
    rating: number;
    id: number;
    year: number
    image: string;
    big_image: string;
    description: string;
    trailer: string;
    trailer_embed_link: string;
    trailer_youtube_id: string;
    genre: []
    director: []
    writers: []
    imdbid: string;
    imdb_link: string;
}

export interface FilterProps {
    title: string;
    year:string;
}

export interface OptionsProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
}