import { useEffect, useState } from "react";
import { Heading } from '../../pages/Home/useStyles'
import { Flex } from '../../useStyles'
import { request } from '../../services/api/request'
import { MoviesConfig} from '../../db'
import Slider from 'react-slick'
import {
    AboutWrapper,
    Datas,
    CastGroup,
    Actors,} from './useStyles'
const About = ({movie}) => {
    const [data, setData] = useState({})
    useEffect(() => {
        request.get(`/shows/${movie.data.id}/images`)
            .then(res => setData(res))
            .catch(err => console.log(err))
        }, [])
        // console.log(data);
    return (
        <AboutWrapper>
            <img
                className="backdrop"
                src={movie && movie.data.image.original}
                alt="shartmas"
            />
            <Datas>
                <Heading style={{ marginTop: "0" }}>
                    {movie && movie.data.name}
                </Heading>
                <h4>
                    Rating: <b>{movie && movie.data.rating.average}</b>
                </h4>
                <h4>
                    Language: <b> {movie && movie.data.language}</b>
                </h4>
                <h4>
                    Genre: <b> {movie && movie.data.genres[0]}</b>
                </h4>
                <p>{movie && movie.data.summary}</p>
                <CastGroup>
                    <p style={{ margin: "0 10px 0 0" }}>Actors:</p>
                    <Flex>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                        <li>lorem</li>
                    </Flex>
                </CastGroup>
                <Actors>
                    <Slider {...MoviesConfig}>
                        
                    </Slider>
                </Actors>
            </Datas>
        </AboutWrapper>
    )
}

export default About
