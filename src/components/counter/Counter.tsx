import { useState } from "react"
import { Container } from "../container/Container";
import Button from "@mui/material/Button";

type CounterType = {
    maxValue: number
    startValue: number
    isIncorrectValues: boolean
    isValuesSet: boolean
}

export const Counter =  ({maxValue, startValue, isIncorrectValues, isValuesSet} : CounterType) => {
    const [value, setValue] = useState<number>(0);

    const incClickHandler = () => {
        setValue(value + 1);
    }

    let disabled = false;
    if (value >= maxValue) {
        disabled = true;
    }

    return (
        <Container>
            <Container>
                {isIncorrectValues && <span className="red">Incorrect value!</span>}
                {!isIncorrectValues && !isValuesSet && <span>enter values and press 'set'</span>}
                {!isIncorrectValues && isValuesSet && <span className={value >= maxValue ? "red" : ""}>{value}</span>}
            </Container>
            <Container>
                <Button size="small" variant="contained" onClick={incClickHandler} disabled={disabled}>inc</Button>
                <Button size="small" variant="contained" onClick={() => setValue(startValue)}>reset</Button>
            </Container>
        </Container>
    )
}
