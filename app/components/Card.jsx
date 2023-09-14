import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import { getGenreNames } from '../../utils/genre'
export const Card = ({ poster, title, rating, likes, start, tags, id }) => {
    return (
        <div className="shadow-md max-w-[380px]" data-testid='movie-card'>
            <div className="bg-gray-500 relative">
                <div className="flex absolute w-full p-6 items-center">
                    <button className="ml-auto bg-[#eeeeee80] h-[2.75rem] w-[2.75rem] rounded-full inline-grid place-items-center"><FaHeart className="text-2xl text-[#fefefe]" /></button>
                </div>
                <Image src={'https://image.tmdb.org/t/p/w342/' + poster} alt={title} width={200} height={500} data-testid='movie-poster' className="w-full h-full object-cover" />
            </div>
            <div className="py-6 px-4">
                <p className="text-[#9CA3AF]">Released: <span data-testid='movie-release-date'>{start.slice(0, 4)}</span></p>
                <Link href={`/movies/${id}`} className='hover:text-pink-500'><h2 className="font-semibold text-lg my-3" data-testid='movie-title'>{title}</h2></Link>
                <div className="flex item-center justify-between pb-3">
                    <div className="flex items-center gap-3">
                        <Image src={'/imdb.jpg'} alt="" width={100} height={40} className="h-7 w-auto" /><p>{rating}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        {
                            !Number.isNaN(likes) &&
                            <>
                                <Image src={'/like.jpg'} alt="" width={40} height={40} className="h-5 w-auto" /> {likes * 10}%
                            </>
                        }
                    </div>
                </div>
                <p className="text-[#9CA3AF]">{getGenreNames(tags).join(", ")}</p>
            </div>
        </div>
    )
}
