import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Exp_modal} from "../modal_examp/exp_modal";
import {$host} from "../../http";
import {baseUrl} from "../baseRoute";

export const ViewExampleFilter =({current_filter, exp_active, setExp_active})=> {

    const by_filter_id = current_filter.filter_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [examples, setExamples] = useState()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [path, setPath] = useState();
    const [url, setUrl] = useState();

    const getExamples = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/examplef/by_filter/${by_filter_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res=>{
                const f = res.data;
                setExamples(f);
            });
        } catch (e){

        }
    }, [token, by_filter_id, request ])

    useEffect( () =>{
        getExamples()
    }, [getExamples])

    const expHandler = (event)=>{
        setTitle(event.target.getAttribute("data-title"))
        setPath(event.target.getAttribute("data-img"))
        setDescription(event.target.getAttribute("data-description"))
        setUrl(event.target.getAttribute("data-url"))
        setExp_active(true)
    };

        return(
            <>
                <div className="also">
                    <div className="row justify-content-center">
                        { !loading && examples && examples.map((example, index) => {
                            return(
                                <div className="col-md-3 mb-4" style={{paddingRight:'0px'}}>
                                    <div className="card shadow-0"
                                         style={{height: '10vh', overflow: 'hidden' , backgroundSize: '100% auto'}}>
                                        <img src={baseUrl+`/exp/${example.path}`}
                                             onClick={expHandler}
                                             data-img={`${example.path}`}
                                             data-title={`${example.title}`}
                                             data-description={`${example.description}`}
                                             data-url = {`${example.url}`}
                                             style={{objectFit: 'cover'}}
                                        />
                                    </div>
                                </div>
                            );})}

                    </div>
                    <Exp_modal exp_active={exp_active} setExp_active={setExp_active} title={title} path={path} description={description} url={url}/>

                </div>
            </>


        )

}
