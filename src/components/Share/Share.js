import { Wrapper, External, Block} from './useStyles'
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TelegramShareButton,
    TwitterShareButton,
    VKIcon,
    TelegramIcon,
    VKShareButton,
} from "react-share";
import { FaRegCopy } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
const Share = ({ active, name, setModal }) => {
    const history = useHistory()
    const copyhandler = () => {
        console.log(history)
        navigator.clipboard.writeText(history.location.href)
    }
    return (
  <>
            <Wrapper className={active ? "active" : ""}>
                <Block >
                    <h3>Share "{name}"</h3>
                   <div style={{ 
                       display: "flex"
                   }}>
                        <input style={{
                            flexGrow: "1",
                            padding: "5px 2px",
                            borderRadius: "40px",
                            border: "1px solid #ddd"
                        }} type="text" placeholder={history.location.href} value={history.location.href} />
                        <button style={{
                            borderRadius: "40px",
                            border: "1px solid #ddd"
                        }}  onClick={copyhandler}>
                        <FaRegCopy />
                    </button>
                   </div>
                    <button className="close-button" onClick={() => setModal(false)}>&times;</button>
                    <External>
                        <p>Or choose the external links down below:</p>
                        <FacebookShareButton
                            url={"shareUrl"}
                            quote={"title"}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={"shareUrl"}
                            quote={"title"}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <TelegramShareButton
                            url={"shareUrl"}
                            quote={"title"}
                            className="Demo__some-network__share-button"
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <VKShareButton
                            url={"shareUrl"}
                            quote={"title"}
                            className="Demo__some-network__share-button"
                        >
                            <VKIcon size={32} round />
                        </VKShareButton>
                    </External>
                </Block>
            </Wrapper>

  </>
    )
}

export default Share
