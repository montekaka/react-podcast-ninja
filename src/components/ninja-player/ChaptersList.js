import React, { useRef } from 'react'
import {useAtom} from "jotai"
import ChaptersListItem from './ChaptersListItem'
import { updatePlayedTimeAtom, fetchChaptersAtom} from './jotai'

const ChaptersList = () => {
  const chaptersRef = useRef(null);
  // const [chapters] = useAtom(chaptersAtom);
  const [_, updatePlayTime] = useAtom(updatePlayedTimeAtom);
  const [chapters] = useAtom(fetchChaptersAtom);

  // fetchChapters()
  const handleClick = (id) => {
    updatePlayTime(chapters[id].startTime);
  }

  const handleShift = () => {
    console.log(chaptersRef.current.scrollLeft)
    chaptersRef.current.scrollLeft = 180;
  }

  if(chapters) {
    return (
      <>      
      <div className="jc-chapters" ref={chaptersRef}>   
          
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
      </>
    )
  }

  return null;
}

export default ChaptersList;