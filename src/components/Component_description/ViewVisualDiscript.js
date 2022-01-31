import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";

export const ViewVisualDiscript =({current_visual})=> {

    const by_visual_id = current_visual.visual_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [visual, setVisual] = useState()


    const getVisual = useCallback(async ()=>{
        try{
            const fetched = await request(`/api/visual/${by_visual_id}`, 'GET', null, {
                Authorization : `Bearer ${token}`
            })
            setVisual(fetched)

        } catch (e){

        }
    }, [token, by_visual_id, request ])

    useEffect( () =>{
        getVisual()
    }, [getVisual])


        return(
            <>
                {!loading && visual &&
                <div className="col-12 description_part">
                    <p className="lead">{visual.description}</p>
                </div>
                }
            </>


        )

}
