import React from 'react';
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'

export default function SectionHeader(props) {
  const {title, textColor} = props;
  const [themeState] = useAtom(themeAtom);
  const {navControler} = themeState;

  if(title) {
    return (
      <div className='jc-npp-container'>
        <div style={{color: textColor, fontSize: '20px', fontWeight: "bold"}}>{title}</div>
        {
          navControler && <div className='nav-controller'></div>
        }
      </div>
    );
  }  

  return null;
}
