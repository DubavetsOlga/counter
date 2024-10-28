import { useState } from "react"
import { Container } from "../container/Container"
import { Button, TextField } from "@mui/material"

type SettingsProps = {
    onSettingSet: (maxValue: number, startValue: number ) => void
    onSettingChange: (isCorrect: boolean) => void
    initialMaxValue: number
    initialStartValue: number
}

export const Settings = ({onSettingSet, onSettingChange, initialMaxValue, initialStartValue}: SettingsProps) => {
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
    const [startValue, setStartValue] = useState<number>(initialStartValue);

    const onSettingSetHandler = () => {
        onSettingSet(maxValue, startValue);
    }

    const maxValueChangeHandler = (value: string) => {
        setMaxValue(parseInt(value));
        onSettingChange(parseInt(value) < 0 || parseInt(value) <= startValue);
    }

    const startValueChangeHandler = (value: string) => {
        setStartValue(parseInt(value));
        onSettingChange(parseInt(value) < 0 || parseInt(value) >= maxValue);
    }

    return (
        <Container>
            <Container>
                <div>
                    <span>max value</span>
                    <TextField
                        value={maxValue}
                        type="number"
                        onChange={(e) => maxValueChangeHandler(e.currentTarget.value)}
                        size="small"
                        error={maxValue < 0 || maxValue <= startValue}
                        sx={{backgroundColor:"white"}}
                    />
                </div>
                <div>
                    <span>start value</span>
                    <TextField
                        value={startValue}
                        type="number"
                        onChange={(e) => startValueChangeHandler(e.currentTarget.value)}
                        size="small"
                        error={startValue < 0 || startValue >= maxValue}
                        sx={{backgroundColor:"white"}}
                    />
                </div>
            </Container>
            <Container>
                <Button
                    size="small"
                    variant="contained"
                    disabled={startValue < 0 || maxValue < 0 || maxValue <= startValue}
                    onClick={onSettingSetHandler}
                >
                    set
                </Button>
            </Container>
        </Container>
    )
}
