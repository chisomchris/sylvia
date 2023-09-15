import Image from 'next/image'

export const Main = ({ data }) => {
    return (
        <div className='w-full pt-6 pr-4 max-w-[912px] md:pr-8'>
            <div className='rounded-xl overflow-hidden'>
                {
                    data?.backdrop_path ?
                        <div className='h-[16rem] md:h-[22rem] w-full bg-[#2113]' >
                            <Image src={'https://image.tmdb.org/t/p/original' + data?.backdrop_path} alt='' width={500} height={200} className='w-full h-[16rem] md:h-[22rem] object-cover' />
                        </div> :
                        <div className='h-[16rem] md:h-[22rem] w-full animate-pulse bg-[#2113]' />
                }
            </div>
            <div className='my-6'>
                {
                    data && typeof data === 'object' && data.title ?
                        <>
                            <div className='mb-4'>
                                <div className='flex gap-x-6 gap-y-3 items-center mb-4 flex-wrap'>
                                    <h1 data-testid='movie-title' className='font-semibold text-2xl'>{data?.title} <span className='inline-block h-1 w-1 rounded-full bg-[#333]' /></h1>
                        
                                    <p data-testid='movie-runtime' className='italic'>{data?.runtime} mins</p>
                                </div>
                                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                                    {
                                        data?.genre.length > 0 ?
                                            data?.genre.map((g,i)=> <li key={i} className='rounded-full py-2 px-5 text-pink-700 border-solid border-2 border-pink-300'>{g.name}</li> :
                                            null
                                    }
                                </ul>
                                <div className='flex gap-6 items-center mb-4'>
                                    <p data-testid='movie-release-date'>{data?.release_date}</p>
                                    {/* <p data-testid='movie-release-date'>{new Date(data?.release_date).toUTCString()}</p> */}
                                    <div className='h-1 w-1 rounded-full bg-[#333]' />
                                    <p className='font-semibold'>{data?.adult ? 'PG-18' : "PG-13"}</p>
                                </div>
                            </div>
                            <div>
                                <p data-testid='movie-overview' className='max-w-[520px]'>{data?.overview}</p>
                            </div>
                        </>
                        :
                        <div className='animate-pulse p-6 bg-[#3333] rounded-xl'>
                            <div className='p-4 bg-[#3334] mb-3 w-5/6 rounded-md'></div>
                            <div className='p-4 w-2/3 bg-[#3334] mb-5 rounded-md'></div>
                            <div className='p-8 bg-[#3334] mb-3 w-1/2 rounded-md'></div>
                        </div>
                }
            </div>
        </div>
    )
}
