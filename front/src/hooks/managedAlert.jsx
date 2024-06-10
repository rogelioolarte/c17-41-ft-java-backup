import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user.context";

function ManagedAlert() {

    const { loggedUser, assignUserInfo } = useContext(UserContext);
    const [showAlert, setShowAlert] = useState(false);

    function cleanMessage() {
        assignUserInfo({ ...loggedUser, lastMessage: '' });
        setShowAlert(false);
    }

    useEffect(() => {
        if (loggedUser.lastMessage.length > 0) {
            setShowAlert(true);
        }
    }, [loggedUser.lastMessage]);

    return (
        showAlert &&
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {loggedUser.lastMessage}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={cleanMessage}></button>
        </div>
    );
}

export default ManagedAlert;
