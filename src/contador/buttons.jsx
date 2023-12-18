import React  from "react"

export default (props) => {
     return  (
        <div>
        <button onClick={props.onIncrementrar}>+</button>
        <button onClick={props.onDescrementrar}>-</button>
    </div>
     )
}