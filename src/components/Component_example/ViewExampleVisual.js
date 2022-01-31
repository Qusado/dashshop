import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {Exp_modal} from "../modal_examp/exp_modal";

export const ViewExampleVisual =({current_visual, exp_active, setExp_active})=> {

    const by_visual_id = current_visual.visual_id;
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [examples, setExamples] = useState()
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [path, setPath] = useState();
    const [url, setUrl] = useState();

    const getExamples = useCallback(async ()=>{
        try{
            const fetched = await request(`/api/examplev/by_visual/${by_visual_id}`, 'GET', null, {
                Authorization : `Bearer ${token}`
            })
            setExamples(fetched);
        } catch (e){

        }
    }, [token, by_visual_id, request ])

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
                                   <div className="card shadow-0" onClick={expHandler}
                                        data-img={`${example.path}`}
                                        data-title={`${example.title}`}
                                        data-description={`${example.description}`}
                                        data-url = {`${example.url}`}
                                        style={{height: '10vh',
                                            backgroundSize: '100% auto',
                                            backgroundImage: `url('/images/examples/${example.path}')`}}
                                   />
                               </div>
                           );})}
                   </div>
                   <Exp_modal exp_active={exp_active} setExp_active={setExp_active} title={title} path={path} description={description} url={url}/>

               </div>
           </>





        )

}
