import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import Main from './Main'
import LightPlayerHolder from './LightPlayerHolder'
import './discast.css'

const Discast = ({
  title, enclosureUrl, artworkUrl, configs, comments
}) => {
  return (
    <Suspense fallback={<></>}>
      <Provider>
        <Main
          artworkUrl={artworkUrl}
          title={title}
          enclosureUrl={enclosureUrl}
          configs={configs}
          comments={comments}
        />
        <LightPlayerHolder/>
      </Provider>
    </Suspense>
  )
}

export default Discast;