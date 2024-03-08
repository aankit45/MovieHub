import { CustomFilter, Hero, SearchBar, MovieCard } from "@/components";
import { years } from "@/constants";
import { fetchMovies } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: any) {
  const allMovies = await fetchMovies({
    title: searchParams.title || '',
    year: searchParams.year || '',
  });
  //console.log("star s" + JSON.stringify(allMovies));
  const isDataEmpty = allMovies.length < 1 || !allMovies;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Movies Catelog
          </h1>
          <p>Let's Explore</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
                <CustomFilter title="year" options={years}/>
              </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allMovies.map((movie: any) => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oop, no results</h2>
              <p>{allMovies?.message}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
