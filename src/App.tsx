import { useState } from 'react';
import './App.css';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

const maxValueAsString = localStorage.getItem("maxValue");
const startValueAsString = localStorage.getItem("startValue");
const initialMaxValue = maxValueAsString ? parseInt(maxValueAsString) : 0;
const initialStartValue = startValueAsString ? parseInt(startValueAsString) : 0;

export type stateType = "wrong" | "set" | "unset"

function App() {
    const [maxValue, setMaxValue] = useState(initialMaxValue);
    const [startValue, setStartValue] = useState(initialStartValue);
    const [state, setState] = useState<stateType>("set");

    const [isSetting, setIsSetting] = useState(false);

    const settingSetHandler = (maxValueNew: number, startValueNew: number) => {
        setMaxValue(maxValueNew);
        setStartValue(startValueNew);
        setState("set")
        localStorage.setItem("maxValue", maxValue.toString())
        localStorage.setItem("startValue", startValue.toString())
        setIsSetting(false)
    }

    return (
        <div className="App">
            {isSetting ? 
            <Settings
                initialMaxValue={initialMaxValue}
                initialStartValue={initialStartValue}
                onSettingSet={settingSetHandler}
                onSettingChange={setState}
            /> : 
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                state={state}
                onSetClick={setIsSetting}
            /> }
        </div>
    );
}

export default App;
