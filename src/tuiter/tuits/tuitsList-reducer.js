import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuitList.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}



const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "Nsa.jpg",
};

const templateTuit = {
    ...currentUser,
    "time": "23h",
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "liked": false
};

const tuitsListSlice = createSlice({
                                       name: 'tuits',
                                       // initialState: tuitsList,
                                       initialState,
                                       extraReducers: {
                                           [findTuitsThunk.pending]:
                                               (state) => {
                                                   state.loading = true
                                                   state.tuits = []
                                               },
                                           [findTuitsThunk.fulfilled]:
                                               (state, { payload }) => {
                                                   state.loading = false
                                                   state.tuits = payload
                                               },
                                           [findTuitsThunk.rejected]:
                                               (state) => {
                                                   state.loading = false
                                               },
                                           [deleteTuitThunk.fulfilled] :
                                               (state, { payload }) => {
                                                   state.loading = false
                                                   state.tuits = state.tuits
                                                       .filter(t => t._id !== payload)
                                               },
                                           [createTuitThunk.fulfilled]:
                                               (state, { payload }) => {
                                                   state.loading = false
                                                   state.tuits.push(payload)
                                               },
                                           [updateTuitThunk.fulfilled]:
                                               (state, { payload }) => {
                                                   state.loading = false
                                                   const tuitNdx = state.tuits
                                                       .findIndex((t) => t._id === payload._id)
                                                   state.tuits[tuitNdx] = {
                                                       ...state.tuits[tuitNdx],
                                                       ...payload
                                                   }
                                               }



                                       },



                                       reducers: {
                                           // deleteTuit(state, action) {
                                           //     const index = state
                                           //         .findIndex(tuit =>
                                           //                        tuit._id === action.payload);
                                           //     state.splice(index, 1);
                                           // },

                                           createTuit(state, action) {
                                               state.unshift({
                                                                 ...action.payload,
                                                                 ...templateTuit,
                                                                 _id: (new Date()).getTime(),
                                                             })
                                           },


                                           likeTuit(state, action) {
                                               const tuitIndex = state.findIndex(
                                                   (Post) => Post._id === action.payload._id)
                                               state[tuitIndex].liked = true;
                                               state[tuitIndex].likes += 1;
                                           },
                                           unlikeTuit(state, action) {
                                               const tuitIndex = state.findIndex(
                                                   (tuit) => tuit._id === action.payload._id)
                                               state[tuitIndex].liked = false;
                                               state[tuitIndex].likes -= 1;

                                           }
                                           // updateProfile(state, action) {
                                           //     const tuitIndex = state.findIndex(
                                           //         (tuit) => tuit._id === action.payload._id)
                                           //     state[tuitIndex] = action.payload
                                           //
                                           // },
                                       }
                                   });

export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsListSlice.actions;
export default tuitsListSlice.reducer;