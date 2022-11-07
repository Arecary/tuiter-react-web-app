import {createSlice} from "@reduxjs/toolkit";
import tuitsList from './tuitList.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "Nsa.jpg",
};

const templateTuit = {
    ...currentUser,
    "time": "23h",
    "title1": "Space",
    "link": "",
    "title2": "",
    "image": "",
    "content": "",
    "content2": "",
    "replies": 4200,
    "retuits": 3500,
    "likes": 37500,
    "liked": false
}
const tuitsListSlice = createSlice({
                                       name: 'tuitsList',
                                       initialState: tuitsList,
                                       reducers: {
                                           deleteTuit(state, action) {
                                               const index = state
                                                   .findIndex(tuit =>
                                                                  tuit._id === action.payload);
                                               state.splice(index, 1);
                                           },

                                           createTuit(state, action) {
                                               state.unshift({
                                                                 ...action.payload,
                                                                 ...templateTuit,
                                                                 _id: (new Date()).getTime(),
                                                             })
                                           }
                                       }
                                   });

export const {createTuit, deleteTuit} = tuitsListSlice.actions;
export default tuitsListSlice.reducer;