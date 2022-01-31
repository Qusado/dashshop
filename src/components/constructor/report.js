import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import $ from "jquery";
import {ViewExampleReport} from "../Component_example/ViewExampleReport";
import {Visual_modal} from "../modal_visual/Visual_modal";
import {$host} from "../../http";



export const Report = ({form}) =>{
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [reports, setReports] = useState()

    const getReports = useCallback(async ()=>{
        try{
            const fetched = await $host.post(`/api/report/`, null, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const r = res.data;
                setReports(r);
            });
        } catch (e){

        }
    }, [token, request ]);

    const [current_report, setCurrentReport] = useState({
        report_id:'', title:''
    });
    const [modalViewExpActive, setModalViewExpActive] = useState(false);
    const [modalViewVisualActive, setModalViewVisualActive] = useState(false);

    $(".praon30").on("click",function() {
        $(".praon30").removeClass('current_choise');
        $(this).addClass('current_choise');

    })

    const Reporthandler = event => {
        setCurrentReport({report_id: event.target.id, title: event.target.getAttribute("data-title")})
        form.report_id = event.target.id;
    }

    $(function(){
        var $h3s = $('.list-group-item').click(function(){
            $h3s.removeClass('active');
            $(this).addClass('active');
        });
    });

    useEffect(()=>{
        getReports()
    }, [getReports])

    return(
        <fieldset>
            <div id="color" className="container-fluid w-100 row p-0 m-0">
                <div className="row left_part px-0 d-block">
                    <div className="col-12 px-0 mb-5">
                        <div className="background_title">
                            <h3 className="px-4 py-1 text-white">Формат отчетности</h3>
                        </div>
                    </div>
                    <div className="row col-12 m-0" style={{paddingLeft:"30px"}}>
                        <div className="col-6">
                            <ul className="list-group list-group-flush">
                                {reports && reports.map(report =>
                                    <li className="list-group-item list-group-item-action pt-4"
                                        onClick={Reporthandler}
                                        id={`${report.id_reporting_format}`}
                                        value={`${report.id_reporting_format}`}>
                                        <div className="row justify-content-between"
                                             onClick={Reporthandler}
                                             id={`${report.id_reporting_format}`}
                                        >
                                            <h5 className="col-8 mx-0 px-0"  onClick={Reporthandler}
                                                id={`${report.id_reporting_format}`}>{report.title}</h5>
                                            <button className=" col-3 mx-0 modal_button" type="button"
                                                    id={`${report.id_reporting_format}`}
                                                    onClick={()=>{
                                                        setModalViewVisualActive(true);
                                                    }}>
                                                <i className="far fa-edit"></i> Графики
                                            </button>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5 className="examples_title">Примеры</h5>
                            <ViewExampleReport current_report={current_report} exp_active={modalViewExpActive} setExp_active={setModalViewExpActive}/>
                        </div>
                        <Visual_modal form={form} current_report={current_report} setVisual_active={setModalViewVisualActive} visual_active={modalViewVisualActive}/>
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
