import React, {Suspense} from 'react';
import {Provider} from 'jotai'
import Main from './Main'

const Discast = ({
  title, enclosureUrl, configs, comments
}) => {
  return (
    <Suspense fallback={<></>}>
      <Provider>
        <Main
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