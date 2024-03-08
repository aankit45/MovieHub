'use client';
import { useState } from "react";
import { SearchMovies } from "@/components";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
      />
    </button>
  );
const SearchBar = () => {
    const [genres, setGenres] = useState('');
    const [title, setTitle] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        if(title === '') {
            return alert('Please fill in the search bar');
        }
        updateSearchParams(title.toLowerCase());
     }
     const updateSearchParams = (title:string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(title) {
            searchParams.set('title',title)
        } else {
            searchParams.delete('title');
        }
        

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName);
     }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
      {/* <div className='searchbar__item'>
        <SearchMovies
          genres={genres}
          setGenres={setGenres}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div> */}
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Search Movies...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
    )
}

export default SearchBar