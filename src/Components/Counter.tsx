import {useState} from "react";
import cls from './Counter.module.scss'
const Counter = () => {

    const [counter, setCounter] = useState(0)

    return <div>
        <h1>{counter}</h1>
        <button className={cls.button} onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
}
export default Counter;