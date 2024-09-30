import { useEffect, useRef, useState } from "react"

import { getTrendingVideos } from "../Services/GlobalApi"

import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;


function Slider() {

  const elementRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
    
  }

   const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
    
  }





  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
    
   
  }, [])

  const getTrendingMovies = () => {
    getTrendingVideos.then((resp) => {
      //console.log(resp)
      setMovieList(resp.data.results)
  })
    
    
  }
  



  return (
    <div>
      <HiChevronLeft className="hidden md:block text-[30px] absolute mx-9 mt-[155px] cursor-pointer"
        onClick={() => {
        sliderLeft(elementRef.current)
      }}/>
      <HiChevronRight className="hidden md:block text-[30px] absolute mx-9 mt-[155px] cursor-pointer right-0"
        onClick={() => {
        sliderRight(elementRef.current)
      }}/>


    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}> {movieList.map((item)=>(
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in '/>
    ))}</div>
      </div>
  )
}
  export default Slider