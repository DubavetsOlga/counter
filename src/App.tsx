import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

const maxValueAsString = localStorage.getItem("maxValue");
const startValueAsString = localStorage.getItem("startValue");
let initialMaxValue = 0; let initialStartValue = 0;
if (maxValueAsString) initialMaxValue = JSON.parse(maxValueAsString)
if (startValueAsString) initialStartValue = JSON.parse(startValueAsString)

function App() {
    const [maxValue, setMaxValue] = useState<number>(initialMaxValue);
    const [startValue, setStartValue] = useState<number>(initialStartValue);
    const [isIncorrectValues, setIsIncorrectValues] = useState<boolean>(false);
    const [isValuesSet, setIsValuesSet] = useState<boolean>(true);

    const settingSetHandler = (maxValueP: number, startValueP: number) => {
        setMaxValue(maxValueP);
        setStartValue(startValueP);
        setIsValuesSet(true);
        localStorage.setItem("maxValue", JSON.stringify(maxValueP))
        localStorage.setItem("startValue", JSON.stringify(startValueP))
    }

    const settingChangeHandler = (isCorrect: boolean) => {
        setIsValuesSet(false);
        setIsIncorrectValues(isCorrect);
    }

    return (
        <div className="App">
            <Settings
                initialMaxValue={initialMaxValue}
                initialStartValue={initialStartValue}
                onSettingSet={settingSetHandler}
                onSettingChange={settingChangeHandler}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                isIncorrectValues={isIncorrectValues}
                isValuesSet={isValuesSet}
            />
        </div>
    );
}

export default App;
