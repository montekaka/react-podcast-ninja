import React from 'react';
import { ArrowRight, ArrowLeft} from 'react-feather';

export default function PodcastPeopleNav({sliderToLeft, sliderToRight, iconColor}) {

  return (
    <div className='people-nav-buttons'>
      <div type="button" onClick={sliderToLeft}><ArrowLeft color={iconColor}/></div>
      <div type="button" onClick={sliderToRight}><ArrowRight color={iconColor}/></div>
    </div>    
  );
}
