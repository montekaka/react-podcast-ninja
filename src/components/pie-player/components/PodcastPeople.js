import React, {useRef} from 'react';
import PodcastPeopleNav from './PodcastPeopleNav'
import PodcastPerson from './PodcastPerson'

export default function PodcastPeople({people, artwork, textColor, peopleTitle}) {
  const ref = useRef(null);
  const scrollPerClick = 240; 
  const sliderToRight = () => {    
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft + scrollPerClick,
      behavior: 'smooth'
    })
  }

  const sliderToLeft = () => {
    ref.current.scrollTo({
      top: 0,
      left: ref.current.scrollLeft - scrollPerClick,
      behavior: 'smooth'
    })
  }  

  if(people && people.length > 0) {
    return (
      <div className='jc-podcast-people-wrapper'>
        <div className='podcast-people-header'>
          <h3 style={{color: textColor}}>{peopleTitle ? peopleTitle : "Meet the Hosts"}</h3>
          {people && people.length > 1 ? <PodcastPeopleNav sliderToLeft={sliderToLeft} sliderToRight={sliderToRight} iconColor={textColor}/> : null}
        </div>
        <div className='podcast-people-container' ref={ref}>
          {
            people.map((person, idx) => <PodcastPerson 
              key={`person-${idx+1}`} 
              artwork={artwork}
              name={person.name} 
              role={person.role} 
              img={person.img} 
              href={person.href}
              roles={person.roles} 
              host_href={person.host_href ? person.host_href : person.href}
              textColor={textColor}
            />)
          }
        </div>
      </div>
    );
  }  

  return null;
}
