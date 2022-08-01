import React from 'react';
import {storiesOf} from '@storybook/react'
import {AppLink} from '../components/links'

const stories = storiesOf('App Link', module);

stories.add('Link', () => {
  return (
    <AppLink
      title="hello world"
      subtitle="What a lovly day"
      imageSrc="https://www.apple.com/v/apple-podcasts/c/images/overview/hero_icon__c135x5gz14mu_large_2x.png"
      titleDirection="column-reverse"
      link="https://www.abc.com"
      backgroundColor="yellow"
    >
      <div>YOLO</div>
    </AppLink>
  );
})
