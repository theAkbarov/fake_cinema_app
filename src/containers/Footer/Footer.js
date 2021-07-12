import { useEffect, useState } from "react";
import { FooterExternalLinks } from "../../db";
import { Container, Flex } from "../../useStyles";
import { Wrapper, ExternalLink, ExternalLinks, Row } from "./useStyles";

const Footer = () => {
    const [userInfos, setuserInfos] = useState([]);
    useEffect(() => {
        fetch(`https://geolocation-db.com/json/`)
            .then((res) => res.json())
            .then((res) => setuserInfos(res));
    }, []);
    return (
        <Wrapper>
            <Container>
                <Flex style={{alignItems:"center"}}>
                    <ExternalLinks>
                        {FooterExternalLinks.map((el) => (
                            <ExternalLink key={el.id} to={el.url}>
                                <img src={el.icon} alt={el.title} />
                            </ExternalLink>
                        ))}
                    </ExternalLinks>
                    <Row>
                        <p>Support team: support@cinemagic.uz</p>
                        <a href="tel:+998712527477">+998 71 252 74 77</a>
                    </Row>
                    <Row>
                        <p>
                            Your IP: <strong>{userInfos && userInfos.IPv4}</strong>
                        </p>
                        <p>
                            Your location:{" "}
                            <strong>
                                {userInfos && userInfos.country_name},{" "}
                                {userInfos && userInfos.city}
                            </strong>
                        </p>
                    </Row>
                    <Row>
                        <p>All right are served.</p>
                        <p>Creted with love ❤️</p>

                    </Row>
                </Flex>
            </Container>
        </Wrapper>
    );
};

export default Footer;
