import { ImagesWrapper } from './useStyles.js'
import { useSelector} from 'react-redux'
import { ImagesConfig } from '../../db'
import Slider from 'react-slick'
const Images = () => {
    const state = useSelector(state => state.allPayloads.images)
    return (
        <ImagesWrapper>
            <Slider {...ImagesConfig}>
                {state && state.data.map(el => (
                    <div>
                        <a target="_blank" href={el.resolutions.original.url}>
                            <img width="185" height="104" style={{ objectFit: "cover",objectPosition:"center" }} src={el.resolutions.original.url} alt="" />

                        </a>

                    </div>
                ))}
            </Slider>
        </ImagesWrapper>
    )
}

export default Images
