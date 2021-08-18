import React from 'react';
import {useAtom} from 'jotai'
import { tabAtom } from './jotai'
import PlayerContainer from './PlayerContainer'
import MoreInfoSection from './MoreInfoSection'
import SubscribeSection from './SubscribeSection';

const MainSectionSwitch = () => {
  const [tabState]  = useAtom(tabAtom);

  switch (tabState) {
    case 'main':
      return <PlayerContainer/>
    case 'more-info':
      return <MoreInfoSection/>
    case 'subscribe':
      return <SubscribeSection/>
    default:
      return <PlayerContainer/>
  }
}

export default MainSectionSwitch;