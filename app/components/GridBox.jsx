"use client"
import { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa"
import { Card } from "./Card"

export const GridBox = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=fb038e97a4f7cce3d4f0ba8048cc8f78')
                const data = await response.json()
                setMovies(data.results)
            } catch {
                err => console.error(err)
            }
        }
        getMovies()
    }, [])

    return (
        <section className="py-6">
            <div className="wrapper">
                <div className="flex items-center justify-between pb-6">
                    <h2 className="font-semibold text-xl">Featured Movie</h2>
                    <button className="text-[#BE123C] inline-flex items-center gap-2">See more <FaAngleRight /></button>
                </div>
                <ul className="grid gap-x-9 gap-y-12 min-[420px]:justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {
                        movies.length > 0 ? movies.slice(1, 11).map((movie, index) => <Card key={index} title={movie.title} rating={movie.rating} likes={movie.vote_average} start={movie.release_date} country={movie.country} tags={movie.genre_ids} poster={movie.poster_path} id={movie.id} />) : null
                    }
                </ul>
            </div>
        </section>
    )
}
