import {logout} from "./api";
import {Navigate} from "react-router-dom";


export default function Logout(props) {
    if (props.currentUser) {
        logout();
        return null;
    } else {
        return <Navigate to="/login" replace/>;
    }
}