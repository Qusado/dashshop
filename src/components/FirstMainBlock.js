import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {baseUrl} from "./baseRoute";


export const FirstMainBlock = () => {
    return (
        <div className="BackPic" style={{backgroundImage:`url(${baseUrl}+"/fon4.png")`}}>
            <div className="container">
                <div className="row ">
                    <div className="col-8 main_first_phrase text-left">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4 main_second_phrase text-right">
                        <h3>Eget arcu dictum varius duis at consectetur lorem donec massa.</h3>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/constructor">
                    <button type="button" className="btn btn-lg my-5 btn-primary bigbut">
                        Создать свой дашборд
                    </button>
                </Link>
            </div>
        </div>
    )}
