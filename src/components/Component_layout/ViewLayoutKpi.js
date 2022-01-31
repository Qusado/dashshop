import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Kpi_01} from "../kpi/kpi_0.1";
import {Kpi_02} from "../kpi/kpi_0.2";
import {Kpi_03} from "../kpi/kpi_0.3";

export const ViewLayoutKpi =({current_kpi})=> {
    const kpi_id = current_kpi.kpi_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    return(
        <div>
            {kpi_id==1 && <Kpi_01/>}
            {kpi_id==2 && <Kpi_02/>}
            {kpi_id==3 && <Kpi_03/>}

        </div>
    );
}
