'use client';
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { SearchMoviesProps } from "@/types"
import Image from "next/image";
import { genre } from "@/constants";
const SearchMovies = ({ genres, setGenres }: SearchMoviesProps) => {
  const [query, setQuery] = useState('');
  const filteredGenres = query === " "
    ? genre
    : genre.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    ))
  return (
    <div className="search-manufacturer">
      <Combobox value={genres} onChange={setGenres}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src='/movie-logo.svg'
              width={20}
              height={20}
              className="ml-4"
              alt="movie-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Search Genres"
            displayValue={(genres: string) => genres}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              ">
              {filteredGenres.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                        {item}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                        >
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMovies