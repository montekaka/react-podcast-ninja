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
  getScreenNameAtom,
  commentsAtom
} from './jotai'

const Main = ({title, artworkUrl, enclosureUrl, configs, comments}) => {
  const [, setUrl] = useAtom(enclosureUrlAtom);
  const [, setMetas] = useAtom(metasAtom);
  const [configsState, setConfigs] = useAtom(configsAtom);
  const [screenState] = useAtom(screenAtom);
  const [screenName] = useAtom(getScreenNameAtom);
  const [commentsState, setCommentsState] = useAtom(commentsAtom);

  useEffect(() => {
    setUrl(enclosureUrl)
  }, [enclosureUrl])

  useEffect(() => {
    setMetas({title, src: artworkUrl})
  }, [title, artworkUrl])

  useEffect(() => {
    setConfigs(configs)
  }, [configs])

  useEffect(() => {
    setCommentsState(comments)
  }, [comments])

  // return <NewComment/>

  if(screenName === 'main') {
    return (    
      <div className={`bh-main-display-container`} style={{backgroundColor: configsState.primaryBackgroundColor, color: configsState.primaryTextColor}}>
        <PlayerContainer/>
        <InputTextBox/>
        <Comments/>
      </div>
    )
  } else {
    return <NewComment/>
  }
}

export default Main;