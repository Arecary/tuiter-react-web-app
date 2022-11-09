import React, {useState} from "react";
import Count from "./count"

const TestState = () => {

    const [count, setCount] = useState(123);
    const [email, setEmail] = useState("zs19960203@gmail.com");
    const [bio, setBio] = useState("NEU, PC games");
    const [show, setShow] = useState(true);
    const [edit, setEdit] = useState(false);
    const [profile, setProfile] = useState({
                                               name: 'shi', gender: 'male', password: '1234'
                                           });
    const up = (e) => {
        setCount(count + 1);
    }
    const down = (e) => {
        setCount(count - 1);
    }
    const changeEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }
    const changeName = (event) => {
        const newName = event.target.value;
        const setP = {
            name: newName,
            gender: profile.gender,
            password: profile.password
        }
        setProfile(setP)
    }
    const changeGender = (event) => {
        const newGender = event.target.value;
        const setP = {
            ...profile,
            gender: newGender
        }
        setProfile(setP)
    }

    const changePassword = (event) => {
        const newPassword = event.target.value;
        const setP = {
            ...profile,
            password: newPassword
        }
        setProfile(setP)
    }

    return (
        <>


            <div>
                <h3>Objects</h3>
                Name: <input value={profile.name} onChange={changeName}/><br/>
                Gender: <input value={profile.gender} onChange={changeGender}/><br/>
                Password: <input value={profile.password} type="password"
                                 onChange={changePassword}/><br/>
                <pre>
                    {JSON.stringify(profile, null, 2)}
                </pre>
                <hr/>
            </div>

            {/*<div>*/}
            {/*    <h3>count</h3>*/}
            {/*    count={count}*/}
            {/*    <button onClick={up}>up</button>*/}
            {/*    <button onClick={down}>down</button>*/}
            {/*</div>*/}
            <Count
                count={count}
                up={up}
                down={down}
            />

            <div>
                <h3> email </h3>
                <input type="checkbox" checked={edit} onChange={(E) => setEdit(E.target.checked)}/>
                {
                    edit &&
                    <input value={email} style={{width: "300px"}} onChange={changeEmail}/>
                }
                {
                    !edit &&
                    <span>email = {email}</span>
                }
                <br/>
            </div>

            <div>
                <h3>Bio</h3>
                <input type="checkbox" checked={show} onChange={(e) => setShow(e.target.checked)}/>
                <br/>
                <div>{
                    show &&
                    <textarea value={bio}
                              onChange={(e) => setBio(e.target.value)}></textarea>
                }
                </div>

                <br/>
                bio = {bio}
            </div>
        </>
    )
}

export default TestState;