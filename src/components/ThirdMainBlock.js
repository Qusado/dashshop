import React, {useContext} from 'react'
import {Link} from "react-router-dom";


export const ThirdMainBlock = () => {
    return (
        <div className="three d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
                <Link to="/desk">
                    <button type="button" className="btn btn-lg btn-primary bigbut">
                        Создать свой дашборд
                    </button>
                </Link>
            </div>
        </div>

    )}
