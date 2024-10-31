import { useState } from "react"
import { Container } from "../container/Container";
import { stateType } from "../../App";
import { Button } from "../button/Button";

type CounterType = {
    maxValue: number
    startValue: number
    state: stateType
    onSetClick: (value: boolean) => void
}

export const Counter =  ({maxValue, startValue, state, onSetClick} : CounterType) => {
    const [value, setValue] = useState(0);

    return (
        <Container>
            <Container>
                {{
                    wrong: <span className="red">Incorrect value!</span>,
                    unset: <span>enter values and press 'set'</span>,
                    set:   <span className={value >= maxValue ? "red" : ""}>{value}</span>
                }[state]}
            </Container>
            <Container>
                <Button onClick={() => setValue(value + 1)} disabled={value >= maxValue}>
                    inc
                </Button>
                <Button onClick={() => setValue(startValue)}>
                    reset
                </Button>
                <Button onClick={() => onSetClick(true)}>
                    set
                </Button>
            </Container>
        </Container>
    )
}
