import { InputHolder, Label, FormControl } from "./useStyles";

const FilterInput = ({ data }) => {
    let years = [];
    for (let i = 2000; i < 2021; i++) {
        years.push(i);
    }

    return (
        <InputHolder>
            <Label>{data.label}</Label>
            <FormControl
                onChange={(e) => console.log(e)}
                list={data.id}
                type="text"
                placeholder={data.defaultValue}
            />
            <datalist id={data.id}>
                {data.label === "Year"
                    ? years.length > 0 &&
                    years.reverse().map((el) => <option key={el} value={el} />)
                    : data.options.map((el) => <option key={el} value={el} />)}
            </datalist>
        </InputHolder>
    );
};

export default FilterInput;
