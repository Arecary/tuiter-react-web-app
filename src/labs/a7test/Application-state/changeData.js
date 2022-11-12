import {useSelector} from "react-redux";

const ChangeData = (

    {data, change}

) => {
    const currentUser = useSelector((state)=> state)
    return(
        <>
            <h3>Change Data</h3>
            <textarea value={data.name}/>
            <button onClick={()=>change(currentUser)}>change</button>
        </>

    )
}

export default ChangeData;