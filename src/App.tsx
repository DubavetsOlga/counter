import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [isIncorrectValues, setIsIncorrectValues] = useState<boolean>(false);
    const [isValuesSet, setIsValuesSet] = useState<boolean>(false);

    const settingSetHandler = (maxValue: number, startValue: number) => {
        setMaxValue(maxValue);
        setStartValue(startValue);
        setIsValuesSet(true);
    }

    const settingChangeHandler = (isCorrect: boolean) => {
        setIsValuesSet(false);
        setIsIncorrectValues(isCorrect);
    }

    return (
        <div className="App">
            <Settings
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
