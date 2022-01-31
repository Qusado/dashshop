import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {ViewLayoutFilter} from "../Component_layout/ViewLayoutFilter";
import {ViewFilterTitle} from "../Component_title/ViewFilterTitle";
import {ViewFilterDiscript} from "../Component_description/ViewFilterDiscript";
import {ViewExampleFilter} from "../Component_example/ViewExampleFilter";



export const Filter = ({form}) =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [filters, setFilters] = useState()

    const getFilters = useCallback(async ()=>{
        try{
            const fetched = await request(`/api/filter/`, 'POST', null, {
                Authorization : `Bearer ${token}`
            })
            setFilters(fetched)
        } catch (e){

        }
    }, [token, request ])

    const [current_filter, setCurrentFilter] = useState({
        filter_id: '', title:''
    }) ;
    const [modalViewExpActive, setModalViewExpActive] = useState(false);

    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');

    })

    const Filterhandler = event =>{
        setCurrentFilter({filter_id: event.target.id, title: event.target.getAttribute("data-title")})
        form.filter_id = event.target.id;
        console.log(form)
    }

    useEffect(()=>{
        getFilters()
    }, [getFilters])
    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0 justify-content-center">
                <div className="col-10 px-0 left_part">
                    <div className="row col-12 m-0 p-0 justify-content-start">
                        <div className="col-12 px-0 mb-2">
                            <div className="background_title">
                                <ViewFilterTitle current_filter={current_filter}/>

                            </div>
                        </div>
                        <div className="col-8" style={{paddingLeft: "30px", paddingRight: "0px"}}>
                            <div className="row">
                                <div id="view_board" className="view_board mb-2 px-0 col-12">
                                    <div className="box">
                                        <div id="m-6" className="Hide">
                                            <ViewLayoutFilter current_filter={current_filter}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pb-2" style={{paddingRight: "30px", paddingLeft: "0px"}}>
                            <h5 className="examples_title">Описание</h5>
                            <ViewFilterDiscript current_filter={current_filter}/>
                        </div>
                        <div className="col-12" style={{paddingLeft: "30px"}}>
                            <h5 className="examples_title">Примеры</h5>
                        </div>
                        <div className="col-8">
                            <ViewExampleFilter current_filter={current_filter} exp_active={modalViewExpActive}
                                             setExp_active={setModalViewExpActive}/>
                        </div>
                    </div>
                </div>
                <div className="col-2 right_part" style={{padding: '0px'}}>
                    <div className="h-100 position-relative">
                        <div className="praon29">
                            {filters && filters.map((filter, index) => {
                                return (
                                    <>
                                        <input type="radio" name="filter_id" className="filter_id"
                                               id={`${filter.id_constructor_filter}`}
                                               value={`${filter.id_constructor_filter}`}/>
                                        <label htmlFor={`${filter.id_constructor_filter}`}>
                                            <div className="praon30 px-4 py-5 "
                                                 name="filter_id"
                                                 id={`${filter.id_constructor_filter}`}
                                                 data-title={`${filter.title}`}
                                                 onClick={Filterhandler}
                                            >
                                                <img src={`mini/${filter.layout_img}`}
                                                     name="filter_id"
                                                     className="shadow-5-strong"
                                                     id={`${filter.id_constructor_filter}`}
                                                     data-title={`${filter.title}`}
                                                     value={`${filter.id_constructor_filter}`}
                                                />
                                            </div>
                                        </label>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_place">
                <div className="row col-12 justify-content-end py-2">
                    <input type="button" name="previous" className="previous action-button shadow" value="Вернуться"/>
                    <input type="button" name="next" className="next action-button shadow" value="К следующему шагу"/>
                </div>
            </div>
        </fieldset>

    )
}
