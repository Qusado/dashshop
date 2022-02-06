import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./visual_modal.css";
import {Dd_modal} from "../dd_modal";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/Auth.Context";
import {$host} from "../../http";


export const Visual_modal = ({form, setForm, visual_active, setVisual_active, current_report}) => {

    const report_id = current_report.report_id;
    const {token} = useContext(AuthContext);
    const {request, loading} = useHttp();
    const [graphs, setGraphs] = useState();

    const getGraphs = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/chart/by_report_format/${report_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const g = res.data;
                setGraphs(g);
            })
        }
        catch (e){

        }
    }, [token, report_id, request])

    useEffect( () =>{
       getGraphs()
    }, [getGraphs])

    return(
        <div className={visual_active? "modal_v active" : "modal_v"} onClick={()=> {
            setVisual_active(false);
        }}>

            <div className={visual_active? "modal_v__content active" : "modal_v__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setVisual_active(false)}}>&times;</a>
                <Dd_modal form={form} setForm={setForm} graphs={graphs} visual_active={visual_active} setVisual_active={setVisual_active}/>
            </div>

        </div>
    )
};
