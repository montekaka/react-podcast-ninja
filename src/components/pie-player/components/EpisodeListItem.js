import React from 'react';
import {useAtom} from "jotai"
import {upatePlayerAtom} from '../jotai'

export default function EpisodeListItem(props) {
  const {title, idx, url} = props;
  const [playerState, setPlayerState] = useAtom(upatePlayerAtom);

  const onClick = () => {
    const payload = {url, playingId: idx, playing: true};
    setPlayerState(payload)
  }

  return <div onClick={onClick}>{title}</div>;
}
