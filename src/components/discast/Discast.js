import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import Main from './Main'
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
      </Provider>
    </Suspense>
  )
}

export default Discast;