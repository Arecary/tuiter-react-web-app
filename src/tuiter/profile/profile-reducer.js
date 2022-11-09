import { createSlice } from "@reduxjs/toolkit";
import profiles from "./profile.json"


const profileSlice = createSlice(
    {
        name: 'profiles',
        initialState: profiles,
        reducers: {
            updateProfile(state, action) {
                const tuitIndex = state.findIndex(
                    (profiles) => profiles._id === action.payload._id)
                state[tuitIndex] = action.payload

            },
        }
    }
);


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;