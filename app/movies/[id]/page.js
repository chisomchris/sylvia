"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { Main } from "./Main";
export default function Home() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=fb038e97a4f7cce3d4f0ba8048cc8f78`
        );
        const data = await response.json();
        console.log(data);
        setMovieDetail(data);
      } catch {
        (err) => console.error(err);
      }
    };
    getMovieDetail();
  }, [id]);
  return (
    <div className="min-h-screen max-w-[1152px] mx-auto pt-16 md:pt-0">
      <main className='flex gap-4 justify-start md:gap-9'>
        <SideBar />
        <Main data={movieDetail}/>
      </main>
    </div>
  );
}
