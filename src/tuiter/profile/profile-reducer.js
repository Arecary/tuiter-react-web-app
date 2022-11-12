import {createSlice} from "@reduxjs/toolkit";
import profiles from "./profile.json"

const profileSlice = createSlice(
    {
        name: 'profiles',
        initialState: profiles,
        reducers: {
            updateProfile(state, action) {
                alert(action.payload.location)
                return state = {
                    ...state,
                    FirstName: action.payload.FirstName,
                    location: action.payload.location,
                    bio: action.payload.bio,
                    website: action.payload.website,
                    dateOfBirth: action.payload.dateOfBirth
                }

                // const profilesIndex = state.findIndex(
                //         (profiles) => profiles._id === action.payload._id)
                //     state[profilesIndex] = action.payload

            },
        }
    }
);

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;