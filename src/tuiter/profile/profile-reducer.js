import { createSlice } from "@reduxjs/toolkit";
import profiles from "./profile.json"


const profileSlice = createSlice(
    {
        name: "profiles",
        initialState: profiles,
    }
);

export default profileSlice.reducer;