import { InputHolder, Label, FormControl } from "./useStyles";

const FilterInput = ({ data,onEdit }) => {
    let years = [];
    for (let i = 2000; i < 2021; i++) {
        years.push(i);
    }

    return (
        <InputHolder>
            <Label>{data.label}</Label>
            <FormControl
                onChange={(e) => onEdit(e)}
                list={data.id}
                name={data.id}
                type="text"
                placeholder={data.defaultValue}
            />
            <datalist id={data.id}>
                {data.label === "Year"
                    ? years.length > 0 &&
                    years.reverse().map((el) => <option key={el} value={el} />)
                    : data.id === "country" ? data.options.map((el) => <option key={el.code} value={el.code} >{el.name}</option>)
                        : data.options.map((el) => <option key={el} value={el} />)
                    }
            </datalist>
        </InputHolder>
    );
};

export default FilterInput;
