import currentUserReducer from "./current-user";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Profile from "./profile";

const store = createStore(currentUserReducer)

const ApplicationState = () => {
    return (
        <>
            <Provider store={store}>
                <h3>Application</h3>
                <Profile/>
                {/*<currentUserReducer/>*/}
            </Provider>
        </>
    )
}

export default ApplicationState;