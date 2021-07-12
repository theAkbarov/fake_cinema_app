import { useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Container } from "../../useStyles"
import { Wrapper, Button, Input, Output, ListItem, Datas} from "./useStyles"
import { request } from '../../services/api/request'

const Search = ({ setSearchbar,active}) => {
    const inputRef = useRef()
    const [typed, setTyped] = useState("")
    const [data, setData] = useState()
    const handleSearch = (e) => {
        setTyped(e.target.value)
        request.get(`/search/shows?q=${typed}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        if (active === true) {
            inputRef.current.focus()
            inputRef.current.value = ""
        }
    }, [active])
    return (
        <Wrapper className={active ? "show" : ""}>
            <Container style={{maxWidth: "600px"}}>

                <div className="form">
                    <Input ref={inputRef} onChange={(e) => handleSearch(e)} value={typed} type="search" placeholder="Type to search movies"/>
                    <Button onClick={() => setSearchbar(false)}>X</Button>
                </div>
                <Output>
                    {data && data.slice(0,3).map(el => (
                        <ListItem>
                            <Link to={`/show/${el.show.id}`}>
                                <img src={el.show.image && el.show.image.original} alt={el.show.name}/>
                                <Datas>
                                    <h3>{el.show.name}</h3>
                                    <p>{el.show.genres[0]}</p>
                                </Datas>
                            </Link>
                        </ListItem>
                    ))}
                </Output>
            </Container>
        </Wrapper>
    )
}

export default Search
