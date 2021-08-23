import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
import LightPlayerHolder from './LightPlayerHolder'
import PlayerContainer from './PlayerContainer'
import {
  enclosureUrlAtom,
  metasAtom
} from './jotai'

const Main = ({title, artworkUrl, enclosureUrl, configs, comments}) => {
  const [, setUrl] = useAtom(enclosureUrlAtom);
  const [, setMetas] = useAtom(metasAtom);

  useEffect(() => {
    setUrl(enclosureUrl)
  }, [enclosureUrl])

  useEffect(() => {
    setMetas({title, src: artworkUrl})
  }, [title, artworkUrl])

  return (
    <div className="bh-main-wrapper">
      <PlayerContainer/>
      <LightPlayerHolder/>
    </div>
  )
}

export default Main;