import { MovieCard, Image, Text, Button } from './useStyles.js'
import Play from '../../assets/icons/play-button-svgrepo-com.svg'
const Movie = ({ title, img, id }) => {
    return (
        <>
        <MovieCard to={`/show/${id}`}>
            <Image >
                <img src={img} alt={title} />
                <Button>
                    <img src={Play} alt="" />
                </Button>
            </Image>
            <div className="shadow"></div>
            <Text>
                {title}
            </Text>
        </MovieCard>
                <Button className="wishlist">
                    add to wishlist
                </Button>
        </>
    )
}

export default Movie