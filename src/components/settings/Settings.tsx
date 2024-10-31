import { useState } from "react"
import { Container } from "../container/Container"
import { TextField } from "@mui/material"
import { stateType } from "../../App"
import { Button } from "../button/Button"

type SettingsProps = {
    onSettingSet: (maxValue: number, startValue: number) => void
    onSettingChange: (state: stateType) => void
    initialMaxValue: number
    initialStartValue: number
}

export const Settings = ({ onSettingSet, onSettingChange, initialMaxValue, initialStartValue}: SettingsProps) => {
    const [maxValue, setMaxValue] = useState(initialMaxValue);
    const [startValue, setStartValue] = useState(initialStartValue);

    const settingsSetHandler = () => {
        onSettingSet(maxValue, startValue);
    }

    const maxValueChangeHandler = (value: string) => {
        setMaxValue(parseInt(value));
        onSettingChange(parseInt(value) < 0 || parseInt(value) <= startValue ? "wrong" : "unset");
    }

    const startValueChangeHandler = (value: string) => {
        setStartValue(parseInt(value));
        onSettingChange(parseInt(value) < 0 || parseInt(value) >= maxValue ? "wrong" : "unset");
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
                    disabled={startValue < 0 || maxValue < 0 || maxValue <= startValue}
                    onClick={settingsSetHandler}
                >
                    set
                </Button>
            </Container>
        </Container>
    )
}
