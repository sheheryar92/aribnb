import React,{useState} from 'react'


const New = () => {
    const [count, setCount] = useState(10);


    var i = 10;

    function clicki(params) {
        i = i+1;
        console.log(i)
    }
    

    function clickCount(params) {
        setCount(i)
    }


    return (
        <div>
            <h1>{i}</h1>
            <h2>{count}</h2>
            <button onClick={clicki}>I</button>
            <button onClick={clickCount}>Count</button>
        </div>
    )
}

export default New


