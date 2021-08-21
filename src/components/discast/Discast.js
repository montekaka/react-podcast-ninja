import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import Main from './Main'

const Discast = ({
  title, enclosureUrl, configs, soundBites
}) => {
  return (
    <Suspense fallback={<></>}>
      <Provider>
        <Main
          title={title}
          enclosureUrl={enclosureUrl}
          configs={configs}
          soundBites={soundBites}
        />
      </Provider>
    </Suspense>
  )
}

export default Discast;