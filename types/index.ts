import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit";
}

export interface SearchMoviesProps {
    genres: string;
    setGenres: (genres: string) => void;
}

export interface MovieProps {
    _id: number;
    backdrop_path: string;
    genres: [];
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: Date;
    title: string;
    contentType: string;
}