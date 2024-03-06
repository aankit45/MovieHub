'use client';
import { MovieProps } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface MovieDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    movie: MovieProps;
}
const MovieDetails = ({ isOpen, closeModal, movie }: MovieDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto
                                transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100
                                    rounded-full" type="button" onClick={closeModal}>
                                        <Image
                                            src="/close.svg"
                                            alt="close"
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </button>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-cover bg-center rounded-lg">
                                            <Image src={movie.poster_path} alt={"movie model"} fill priority className="object-contain" />
                                        </div>
                                        {/* <div className="flex gap-3">
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src="/hero.png" alt={"movie model"} fill priority className="object-contain" />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src="/hero.png" alt={"movie model"} fill priority className="object-contain" />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image src="/hero.png" alt={"movie model"} fill priority className="object-contain" />
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                            {movie.title}
                                        </h2>
                                        <p className="flex text-[32px] font-extrabold">
                                            <span className="self-start text-[14px] font-semibold">
                                                {movie.overview}
                                            </span>
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-3">
                                            {Object.entries(movie).filter(([key, value]) => {
                                                return key !== 'backdrop_path' && key !== 'poster_path' && key !== 'overview';
                                            }).map(([key, value]) => (
                                                <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                    <h4 className="text-grey capitalize">{key.split('_').join('')}</h4>
                                                    <p className="text-black-400 font-semibold ">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default MovieDetails