'use client';
import { useState } from "react";
import { SearchMovies } from "@/components";
const SearchBar = () => {
    const [genres, setGenres] = useState('');
    const handleSearch = () => { }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchMovies genres={genres} setGenres={setGenres}/>
            </div>
        </form>
    )
}

export default SearchBar