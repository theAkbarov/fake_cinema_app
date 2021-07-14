import { Button, FilterWrapper } from "./useStyles"
import { Flex, Container } from '../../useStyles'
import FilterInput from '../../components/FilterInput'
import { filterHTMLsemanticDatas } from "../../db"

const Filter = ({ handleSubmit, handleFillForm }) => {
    return (
        <FilterWrapper>
            <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
            <Flex style={{ alignItems: "flex-end" }}>
                <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[0]} />
                <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[1]} />
                <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[2]} />
                <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[3]} />
                <Button>Reset</Button>
                <Button>Search</Button>
            </Flex>
        </form>
        </Container>
        </FilterWrapper>
    )
}

export default Filter
