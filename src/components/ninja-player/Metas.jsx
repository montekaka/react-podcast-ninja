import {playerSkinAtom} from './jotai'
import {useAtom} from "jotai"

const Metas = (props) => {
  const {podcastTitle, title} = props;
  const [playerSkin] = useAtom(playerSkinAtom)

  return (
    <div className="metas" style={{
      color: playerSkin.primaryTextColor
    }}>
      <div className="subtitle">{podcastTitle}</div>
      <div className="title">{title}</div>
      {props.children}
    </div>
  )
}

export default Metas;