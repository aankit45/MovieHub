import { FilterProps } from "@/types";

export async function fetchMovies( filters : FilterProps) {
    const { title , year} = filters;
    const headers = {
        'X-RapidAPI-Key': '294472bf49mshf1beed13ab2db2bp1f78cajsne9f872f8233a',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
    const url = decodeURI(`https://imdb-top-100-movies.p.rapidapi.com?title=${title}&year=${year}`);
    const response = await fetch(url,
        { headers: headers });

    const result = await response.json();
    //console.log(JSON.stringify(result) + " API");
    return result;
}

export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return newPathName;
}