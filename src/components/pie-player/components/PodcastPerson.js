import React from 'react';
import PodcastPersonRoles from './PodcastPersonRoles'

const Avatar = (props) => {
  const {host_href} = props;

  if(host_href && host_href.length > 0) {
    return (
      <a className='person-avatar-container' 
        target="_blank"
        href={host_href}>
        {props.children}
      </a>
    )
  } else {
    <div className='person-avatar-container'>
      {props.children}
    </div>
  }
}

const Image = ({img, name}) => {
  if(img && img.length > 5) {
    return (
      <img src={img} alt={`hosts ${name} avatar`} className='person-avatar'/>
    );
  } else {
    return (      
      <div className='person-avatar-placeholder'>
        <div className='name'>{name.slice(0, 2).toUpperCase()}</div>
      </div>      
    )
  }  
}

const PersonMain = (props) => {
  const {artwork, name, img,host_href, roles, role, title_href} = props;

  return (
    <div className='podcast-person-wrapper'>    
      <img className='background-img' src={artwork} alt={name}/>  
      <div className='main-container'>
        <Avatar host_href={host_href}>
          <Image img={img} name={name} />
        </Avatar>
        <div className='podcast-person-meta'>
          <div className='person-basic-info'>
            <div className='person-name'>
              <a className='person-name-text' href={title_href} target="_blank">{name}</a>              
            </div>            
          </div>
          <PodcastPersonRoles roles={roles} role={role}/>
        </div>
      </div>
    </div>  
  )
}

export default function PodcastPerson(props) {
  const {artwork, name, img, href,host_href, group, roles, role, backgroundColor, textColor} = props;

  // if(href && href.length > 5) {
  //   return (
  //     <a className='podcast-person-card' target='_blank' href={href} style={{textDecoration: "none"}}>    
  //       <PersonMain
  //         artwork={artwork} 
  //         name={name} 
  //         img={img}
  //         host_href={host_href}
  //         roles={roles}
  //         role={role}
  //       />       
  //     </a>);
  // } 
  
  return (
    <div className='podcast-person-card'>    
      <PersonMain
        artwork={artwork} 
        name={name} 
        img={img}
        host_href={host_href}
        title_href={href}
        roles={roles}
        role={role}
      />
    </div>
  )
}
