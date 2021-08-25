import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
import {AnimatePresence, motion, AnimateSharedLayout} from 'framer-motion'

import PlayerContainer from './PlayerContainer'
import Comments from './Comments'
import InputTextBox from './InputTextBox'
import {
  enclosureUrlAtom,
  metasAtom,
  configsAtom,
  screenAtom,
  getScreenNameAtom
} from './jotai'

const containerVariants = {
  exit: {
    y: '-100vh',
    transition: {ease: 'easeInOut', duration: 1}
  },
  hidden: {
    y: '100',
  },
  moveUp: {
    y: 0,
    transition: {
      // type: 'spring',
      duration: 1
    }
  }
}

const Main = ({title, artworkUrl, enclosureUrl, configs, comments}) => {
  const [, setUrl] = useAtom(enclosureUrlAtom);
  const [, setMetas] = useAtom(metasAtom);
  const [configsState, setConfigs] = useAtom(configsAtom);
  const [screenState] = useAtom(screenAtom);
  const [screenName] = useAtom(getScreenNameAtom);

  useEffect(() => {
    setUrl(enclosureUrl)
  }, [enclosureUrl])

  useEffect(() => {
    setMetas({title, src: artworkUrl})
  }, [title, artworkUrl])

  useEffect(() => {
    setConfigs(configs)
  }, [configs])

  if(screenName === 'main') {
    return (    
      <div className={`bh-main-wrapper`} style={{backgroundColor: configsState.primaryBackgroundColor, color: configsState.primaryTextColor}}>
       <div className="bh-main-display-container">
          <PlayerContainer/>
          <Comments/>
        </div>
        <InputTextBox/>      
      </div>
    )
  }

  return null;

}

export default Main;