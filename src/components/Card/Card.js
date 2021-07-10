import { CardHolder } from "./useStyles";
import { Container } from "../../useStyles";

const Card = ({ title, id, image, year, genre }) => {
    return (
        <CardHolder>
            <Container
                style={{
                    background: `url(${image})`,
                    padding: "7rem 2rem",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "center",
                }}
            >
                <h1 style={{color: "white",mixBlendMode: "difference"}}>{title}</h1>
            </Container>
        </CardHolder>
    );
};

export default Card;
