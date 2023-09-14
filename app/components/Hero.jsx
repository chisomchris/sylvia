"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Header } from './Header'
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'

export const Hero = () => {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=fb038e97a4f7cce3d4f0ba8048cc8f78')
        const data = await response.json()
        setMovie(data.results[0])
      } catch {
        err => console.error(err)
      }
    }
    getMovies()
  }, [])
  return (
    <div className='min-h-screen isolate sm:min-h-0 relative pt-36 md:pt-28'>
      <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
        {
          movie && typeof movie === 'object' && movie?.poster_path &&
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={320} height={800} alt={movie.title} className='w-full h-full object-cover  sm:hidden' />
        }
        {
          movie && typeof movie === 'object' && movie?.backdrop_path &&
          <Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} width={320} height={800} alt={movie.title} className='w-full h-full object-cover hidden sm:block' />
        }

      </div>
      <Header />
      <div className='py-12'>
        <div className='wrapper'>
          <div className='max-w-[380px] text-white bg-[#333333d6] px-4 pt-6 rounded-lg'>
            <Link href={`/movies/${movie?.id}`} className='hover:text-pink-700'><h1 className='font-semibold text-2xl mb-4 md:text-3xl text-inherit hover:text-pink-700'>{movie?.title}</h1></Link>
            <div className="flex items-center gap-12 pb-4">
              <Image src={'/imdb.jpg'} alt="" width={100} height={40} className="h-7 w-auto" />
              <div className="flex items-center gap-3 ">
                <Image src={'/like.jpg'} alt="" width={40} height={40} className="h-5 w-auto rounded-full" /> <p>{movie?.vote_average * 10}%</p>
              </div>
            </div>
            <p className='sm:line-clamp-4'>{movie?.overview}</p>
            <button className='py-2 px-5 rounded-md my-6 inline-flex items-center gap-3 bg-[#BE123C] text-white' > <span className='bg-white rounded-full inline-grid place-items-center h-6 w-6'><FaPlay className='text-[#BE123C] translate-x-[1px] text-sm' /></span>WATCH TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
