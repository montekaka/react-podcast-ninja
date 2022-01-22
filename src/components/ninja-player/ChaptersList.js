import React, { useRef } from 'react'
import {useAtom} from "jotai" 
import ChaptersListItem from './ChaptersListItem'
import useDraggableScroll from 'use-draggable-scroll';
import { updatePlayedTimeAtom, fetchChaptersAtom, themeNameAtom} from './jotai'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'

const ChaptersList = () => {
  const ref = useRef(null);
  // const [chapters] = useAtom(chaptersAtom);
  const [_, updatePlayTime] = useAtom(updatePlayedTimeAtom);
  const { onMouseDown } = useDraggableScroll(ref);
  const [chapters] = useAtom(fetchChaptersAtom);
  const [themeName] = useAtom(themeNameAtom);
  const scrollPerClick = 110; // 100px (card width) + 10 px (gap)

  // fetchChapters()
  const handleClick = (id) => {
    updatePlayTime(chapters[id].startTime);
  }

  const sliderToRight = () => {    
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft + scrollPerClick,
      behavior: 'smooth'
    })
  }

  const sliderToLeft = () => {
    // console.log(ref.current.scrollLeft, ref.current.scrollWidth, ref.current.clientWidth)
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft - scrollPerClick,
      behavior: 'smooth'
    })
  }
  
  if(chapters && chapters.length > 0) {
    return ( 
      <div className={`${themeName}-chapters`}>   
        <div className={`${themeName}-chapters-handle`}>
          <div onClick={sliderToLeft}>
            <img src={arrowLeft} width={30} height={30}/>
          </div>
        </div>
        <div className={`${themeName}-chapters-container`} ref={ref} onMouseDown={onMouseDown}>
        {
          chapters.map((chapter, idx) => {
            if(chapter.title && chapter.startTime !== undefined) {
              return <ChaptersListItem
                id={idx}
                key={`chapter-${idx+1}`}
                title={chapter.title}
                startTime={chapter.startTime}
                onClick={handleClick}
              />
            } else {
              return null;
            }
          })
        }   
        </div> 
        <div className={`${themeName}-chapters-handle`}>
          <div onClick={sliderToRight} >
            <img src={arrowRight} width={30} height={30}/>
          </div>
        </div>              
      </div>
    )
  }

  return null;
}

export default ChaptersList;