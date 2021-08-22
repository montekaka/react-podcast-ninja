import React, {useEffect} from 'react';
import {useAtom} from 'jotai'
import LightPlayerHolder from './LightPlayerHolder'
import PlayPuaseButton from './PlayPauseButton'
import {
  enclosureUrlAtom
} from './jotai'

const Main = ({title, enclosureUrl, configs, comments}) => {
  const [, setUrl] = useAtom(enclosureUrlAtom);

  useEffect(() => {
    setUrl(enclosureUrl)
  }, [enclosureUrl])
  return (
    <div>
      <PlayPuaseButton/>
      <LightPlayerHolder/>
    </div>
  )
}

export default Main;