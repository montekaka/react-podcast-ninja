import React from 'react'
import {useAtom} from "jotai"
import ChaptersListItem from './ChaptersListItem'
import { updatePlayedTimeAtom} from './jotai'

const ChaptersList = ({chapters}) => {

  // const [chapters] = useAtom(chaptersAtom);
  const [_, updatePlayTime] = useAtom(updatePlayedTimeAtom);

  const handleClick = (id) => {
    updatePlayTime(chapters[id].startTime);
  }

  return (
    <div className="jc-chapters">
      {
        chapters.map((chapter, idx) => {
          if(chapter.title && chapter.startTime) {
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
  )
}

export default ChaptersList;