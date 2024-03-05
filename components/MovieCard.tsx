'use client';
import { useState } from "react";
import Image from "next/image";
import { MovieProps } from "@/types";

interface movieCardProps {
  movie: MovieProps
}
const MovieCard = ({ movie }: movieCardProps) => {
  const { _id, backdrop_path, genres, original_title, overview, poster_path, release_date, title, contentType } = movie;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {original_title}
        </h2>
      </div>
      <p className="flex  mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          {overview}
        </span>
      </p>
    </div>
  )
}

export default MovieCard