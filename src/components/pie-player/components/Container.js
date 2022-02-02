import React from 'react';
import {useAtom} from "jotai"
import {themeAtom} from '../jotai'

export default function Container(props) {
  const [themeState] = useAtom(themeAtom);
  const {themeClassName} = themeState;

  return <div className={themeClassName}>{props.children}</div>;
}
