import { useState } from "react"
import { Container } from "../container/Container";
import { stateType } from "../../App";
import { Button } from "../button/Button";

type CounterType = {
    maxValue: number
    startValue: number
    state: stateType
}

export const Counter =  ({maxValue, startValue, state} : CounterType) => {
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
            </Container>
        </Container>
    )
}
