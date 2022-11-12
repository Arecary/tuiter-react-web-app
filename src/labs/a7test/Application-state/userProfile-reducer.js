import {createSlice} from "@reduxjs/toolkit";
import userData from "./userData.json"

// const initialState = {
//     name:"areca",
//     gender:"male",
//     email:"areca@gmail.com"
// }

// const currentUserReducer = () => {
//     // return initialState
//     return userData
// }

const userDataSlice = createSlice(
    {
        name: 'userdata',
        initialState: userData,
        reducers: {
            changeData(state, action){
                alert(action.payload.name)
                // alert("123")

            }
        }

    }
)


export const {changeData} = userDataSlice.actions;
export default userDataSlice.reducer;

// export default currentUserReducer;