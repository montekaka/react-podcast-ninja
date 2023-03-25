import React, {useEffect, useState, useCallback, useRef} from 'react';
import {useAtom} from 'jotai'
// import PropTypes from 'prop-types';
import {
  playerSkinAtom,
  playingIdAtom,
  tabAtom,
  tabsAtom,
  tabsMenuAtom,
  fetchChaptersAtom,
  fetchEpisodesAtom,
  errorMessageAtom,
  loadingAtom,  
  themeNameAtom,
  currentPageAtom,
  totalPageAtom,
  nextPageAtom,
  fetchingAtom
} from './jotai'
// import PlayerContainer from './PlayerContainer'
// import MoreInfoSection from './MoreInfoSection';
import PlayerHolder from './PlayerHolder'
import EpisodeList from './EpisodeList';
import MainSectionSwitch from './MainSectionSwitch'
import LoadingScreenContainer from './LoadingScreenContainer'
import LoadingBouncing from './LoadingBouncing'

const PlaylistPlayer = ({
  themeName, playerId, podcast, episodes, configs, singleEpisode, rssFeedUrl, proxy, jcPodcastApi
}) => {

  // set jotai state
  const [episodesState, fetchEpisodes] = useAtom(fetchEpisodesAtom);
  const [, setPlayerSkin] = useAtom(playerSkinAtom)
  const [playingId, setPlayingId] = useAtom(playingIdAtom)
  const [, setTabsState] = useAtom(tabsAtom);
  const [, setTabsMenuState] = useAtom(tabsMenuAtom);
  const [tabState]  = useAtom(tabAtom);
  const [, fetchChapters] = useAtom(fetchChaptersAtom)
  const [errorMessage] = useAtom(errorMessageAtom)
  const [loading] = useAtom(loadingAtom)
  const [themeNameState, setThemeNameState] = useAtom(themeNameAtom);
  const [currentPage, updateCurrentPage] = useAtom(currentPageAtom);
  const [totalPage] = useAtom(totalPageAtom);
  const [nextPage] = useAtom(nextPageAtom)
  const [fetching] = useAtom(fetchingAtom)  
  
  const intObserver = useRef();
  const lastPostRef = useCallback(post => {
    if(loading || fetching) return;
    if(intObserver.current) intObserver.current.disconnect();
    intObserver.current = new IntersectionObserver(posts => {
      if(posts[0].isIntersecting && (nextPage && nextPage <= totalPage )) {
        updateCurrentPage(currentPage+1)
      }
    })
    if(post) intObserver.current.observe(post);
  }, [loading, nextPage, totalPage]);

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;

    fetchEpisodes({
      rssFeedUrl,
      proxy, 
      episodes,
      jcPodcastApi,
      signal
    })    
    setPlayingId(0);

    return () => controller.abort();
  }, [rssFeedUrl, jcPodcastApi, currentPage, JSON.stringify(episodes)])

  useEffect(() => {
    if(playingId >= 0) {
      fetchChapters()
    }
  }, [playingId, JSON.stringify(episodesState)])

  useEffect(() => {
    if(podcast && podcast.menuItems) {
      setTabsState(podcast);
      setTabsMenuState(podcast.menuItems)
    }
  }, [podcast])
  
  useEffect(() => {
    if(configs && Object.keys(configs).length > 0) {
      setPlayerSkin(configs); // TODO: use mapping to get the right fileds
    }
  }, [JSON.stringify(configs)])  

  useEffect(() => {
    if(themeName) {
      setThemeNameState(themeName)
    }
  }, [themeName])

  if(loading) {
    return (
      <LoadingScreenContainer>        
        <LoadingBouncing/>
        <h2>Loading....</h2>
      </LoadingScreenContainer>
    )
  }

  if(errorMessage && errorMessage.length > 0) {
    return (
      <LoadingScreenContainer>
        <h3>{errorMessage}</h3>
      </LoadingScreenContainer>
    )
  }  

  return (
    <div className={singleEpisode ? `${themeNameState}-player-wrapper ${themeNameState}-single-episode-player-wrapper` : `${themeNameState}-player-wrapper`}>
      {/* {
        tabState === 'main' ? <PlayerContainer/> : <MoreInfoSection/>
      }       */}
      <MainSectionSwitch/>
      {singleEpisode ? null : <EpisodeList lastPostRef={lastPostRef}/> }
      <PlayerHolder/>
    </div>
  )
}

export default PlaylistPlayer;

