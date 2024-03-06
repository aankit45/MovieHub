'use client';
import { useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types";
import CustomButton from "./CustomButton";
import MovieDetails from "./MovieDetails";

interface movieCardProps {
  movie: MovieProps
}
const MovieCard = ({ movie }: movieCardProps) => {
  const { _id, backdrop_path, genres, original_title, overview, poster_path, first_aired, title, contentType } = movie;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {title}
        </h2>
      </div>
      {/* <p className="flex  mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          {overview}
        </span>
      </p> */}
      {poster_path ? ( 
        <div className="relative w-full h-40 my-4 object-contain ">
        <Image src={poster_path} alt={"movie model"} fill priority className="object-contain"/>
      </div>
      ) : ('')}
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/filmcom.png" width={50} height={50} alt="filmposter" />
            <p className="text-[14px]">
              {contentType}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/date.jpg" width={50} height={50} alt="filmposter" />
            <p className="text-[14px]">
              {first_aired}
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton title="View More" 
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="text-white text-[14px] leading-[17px] font-bold"
          rightIcon="/right-arrow.svg"
          handleClick={() => setIsOpen(true)} />
        </div>
      </div>
      <MovieDetails isOpen={isOpen} closeModal={()=>(setIsOpen(false))} movie={movie}/>
    </div>
  )
}

export default MovieCard