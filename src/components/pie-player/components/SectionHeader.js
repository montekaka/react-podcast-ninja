import React from 'react';
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'
import PodcastNav from './PodcastNav'

export default function SectionHeader(props) {
  const {title, sliderToRight, sliderToLeft} = props;
  const [themeState] = useAtom(themeAtom);
  const {navControler, textColor} = themeState;

  if(title) {
    return (
      <div className='jc-npp-container'>
        <div style={{color: textColor, fontSize: '20px', fontWeight: "bold"}}>{title}</div>
        {
          navControler && <PodcastNav iconColor={textColor} sliderToLeft={sliderToLeft} sliderToRight={sliderToRight}/>
        }
      </div>
    );
  }  

  return null;
}
