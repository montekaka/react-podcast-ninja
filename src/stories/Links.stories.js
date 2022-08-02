import React from 'react';
import {storiesOf} from '@storybook/react'
import {AppLink, PageHeader, CollapseCard} from '../components/links'

const stories = storiesOf('App Link', module);

stories.add('Link', () => {
  return (
    <AppLink
      title="Click here"
      subtitle="if you need help listening"
      // imageSrc="https://www.apple.com/v/apple-podcasts/c/images/overview/hero_icon__c135x5gz14mu_large_2x.png"
      titleDirection="column-reverse"
      link="https://www.abc.com"
      backgroundColor="yellow"
    >
    </AppLink>
  );
})

stories.add('PageHeader', () => {
  return (
    <PageHeader
      imageSrc="https://d1fdloi71mui9q.cloudfront.net/UgWJ7evfS6S7j06ouihD_Tr5ta9g3oOng4bmN"
      title="Scale Your Business Summit: Evergreen Funnel Edition"
      subtitle="The Scale Your Business Summit: Evergreen Funnel Edition A 3-day virtual experience to help online business owners scale their business via digital products and evergreen sales funnels"
    />
  );
})

stories.add('CollapseCard', () => {
  return (
    <CollapseCard
      title="RSS Feed"
      imageSrc="https://www.apple.com/v/apple-podcasts/c/images/overview/hero_icon__c135x5gz14mu_large_2x.png"
    >
      <ol style={{padding: "0 1.25rem 0 1.25rem"}}>
        <li>Click here to copy the RSS feed</li>
        <li>Open your podcast app</li>
        <li>Paste RSS feed</li>
      </ol>
    </CollapseCard>
  );
})