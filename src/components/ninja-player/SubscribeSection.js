import React, {useState} from 'react';
import {useAtom} from "jotai"
import {tabAtom, tabsAtom, playerSkinAtom} from './jotai'
import MoreInfoSectionHeader from './MoreInfoSectionHeader'

const SubscribeSection = () => {
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy')
  const [playerSkin] = useAtom(playerSkinAtom);
  const [tabName] = useAtom(tabAtom);
  const [tabContents] = useAtom(tabsAtom);
  const handleChange = (event) => {}

  const handleClickCopy = () => {
    // setRssFeed(value);
    // const copyText = document.querySelector(`#input-widget-code`);
    const copyText = document.querySelector(`#input-rss`);
    copyText.select();
    document.execCommand("Copy");
    setCopyButtonLabel('Copied');
    // change back to Copy in 3 seconds
    setTimeout(() => {
      setCopyButtonLabel("Copy");
    }, 3000)        
  }  

  return (
    <div className="jc-more-info" style={{
      backgroundColor: playerSkin.primaryBackgroundColor,
      color: playerSkin.primaryTextColor
    }}>
      <MoreInfoSectionHeader>
        <div className="js-more-info-title" style={{
          color: playerSkin.primaryTextColor
        }}>Subscribe</div>        
      </MoreInfoSectionHeader>
      <div className="js-more-info-descripion">
        {
          tabContents && tabName && tabContents[tabName] ? <div>
            {
              tabContents[tabName].map((item) => {
                return <div key={item.id}
                  style={{display: 'flex'}}
                >
                  <div style={{
                    color: playerSkin.primaryTextColor, 
                    width: 60,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center'
                  }}                  
                  >{item.label}</div>
                  <input 
                    id="input-rss"
                    style={{
                      flexGrow: 2, 
                      marginLeft: 10, 
                      marginRight: 10,
                      borderRadius: 6
                    }} 
                    value={item.url} 
                    onChange={handleChange}/>
                  <button style={{
                    width: 90,
                    height: 40,
                    display: "inline-block",
                    textAlign: 'center',
                    border: 0,
                    textDecoration: 'none',
                    borderRadius: 6,
                    appearance: 'none',
                    cursor: 'pointer',
                    // padding: "4px 8px",
                    backgroundColor: playerSkin.primaryButtonColor,
                    color: playerSkin.primaryBackgroundColor
                  }}
                  onClick={handleClickCopy}
                  >{copyButtonLabel}</button>
                </div>
              })
            }
          </div> : null
        }
      </div>
    </div>
  )  
  
}

export default SubscribeSection;