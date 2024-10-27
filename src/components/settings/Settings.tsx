import { useState } from "react"
import { Button } from "../button/Button"
import { Container } from "../container/Container"

type SettingsProps = {
    onSettingSet: (maxValue: number, startValue: number ) => void
    onSettingChange: (isCorrect: boolean) => void
}

export const Settings = ({onSettingSet, onSettingChange}: SettingsProps) => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

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
                    <input
                        value={maxValue}
                        type="number"
                        onChange={(e) => maxValueChangeHandler(e.currentTarget.value)}
                        className={maxValue < 0 || maxValue <= startValue ? "red" : ""}
                    />
                </div>
                <div>
                    <span>start value</span>
                    <input
                        value={startValue}
                        type="number"
                        onChange={(e) => startValueChangeHandler(e.currentTarget.value)}
                        className={startValue < 0 || startValue >= maxValue ? "red" : ""}
                    />
                </div>
            </Container>
            <Container>
                <Button
                    disabled={startValue < 0 || maxValue < 0 || maxValue <= startValue}
                    onClick={onSettingSetHandler}
                >
                    set
                </Button>
            </Container>
        </Container>
    )
}
