import React from 'react';
import {useAtom} from "jotai"
import {configsAtom, updateNewCommentAtom, updateNewCommentTime} from './jotai'

const TimeInputBox = (props) => {
  const {id, label, placeholder } = props;
  const [themeState] = useAtom(configsAtom)
  const [comment, updateComment] = useAtom(updateNewCommentAtom)
  const [, updateCommentTime] = useAtom(updateNewCommentTime);

  const handleInputChange = (evt) => {
    const val = evt.target.value;
    updateCommentTime({[id]: val})
  }

  return (
    <div className="bn-time-input-container">
      <label 
        style={{
          color: themeState.primaryTextColor,
          fontSize: '14px'
        }}
        htmlFor={id} 
        className="bn-time-input-label">{label}</label>
      <input 
        id={id}
        onChange={handleInputChange}
        value={comment[id]}
        placeholder={placeholder}
        className="bh-time-input"
        autoComplete="off"
        style={{
          color: themeState.primaryTextColor,          
          backgroundColor: themeState.primaryBackgroundColor,
          height: '30px',
          width: '100px',
          // height: "100%",
          // width: "100%",
          borderRadius: '4px',
          border:  `1px solid ${themeState.primaryButtonColor}`,
        }}
      />      
    </div>
  )
}

export default TimeInputBox;