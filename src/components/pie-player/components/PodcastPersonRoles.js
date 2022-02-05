import React from 'react';

export default function PodcastPersonRoles({roles, role}) {
  if(roles && roles.length > 0) {
    // roles, we might want to limited to show up to 4 - 5 roles?
    return (
      <div className='person-meta-roles'>        
        {
          roles.map((roleTitle, idx) => {
            return (<div key={`person-role-${idx+1}`} className='person-meta-role'>{roleTitle}</div>)
          })
        }
      </div>
    )
  } else if (role && role.length > 2) {
    return (
      <div className='person-meta-roles'>
        <div className='person-meta-role'>
          <div>{role}</div>
        </div>
      </div>
    )
  }

  return null;

}
