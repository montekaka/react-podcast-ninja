import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
import PlayerContainer from './PlayerContainer'
import Comments from './Comments'
import NewComment from './NewComment'
import InputTextBox from './InputTextBox'
import {
  enclosureUrlAtom,
  metasAtom,
  configsAtom,
  screenAtom,
  getScreenNameAtom
} from './jotai'

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

  return <NewComment/>

  // if(screenName === 'main') {
  //   return (    
  //     <div className={`bh-main-wrapper`} style={{backgroundColor: configsState.primaryBackgroundColor, color: configsState.primaryTextColor}}>
  //      <div className="bh-main-display-container">
  //         <PlayerContainer/>
  //         <Comments/>
  //       </div>
  //       <InputTextBox/>      
  //     </div>
  //   )
  // } else {
  //   return <NewComment/>
  // }
}

export default Main;