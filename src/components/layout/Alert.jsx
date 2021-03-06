import React, { useContext } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlertContext from '../../context/alert/alertContext';

export const Alert = () => {
    const alertContext = useContext(AlertContext)
    const { alert } = alertContext

    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <FontAwesomeIcon icon={faInfoCircle} /> {alert.message}
            </div>
        )
    )
}

export default Alert