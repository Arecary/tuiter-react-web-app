import React from "react";

const Count = (
    {count,up,down}
) => {
    return (

        <div>
            <h3>count</h3>
            count={count}
            <button onClick={up}>up</button>
            <button onClick={down}>down</button>
        </div>

    )
}

export default Count;