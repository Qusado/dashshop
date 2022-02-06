import {useCallback, useContext, useEffect, useState} from 'react';
import * as React from 'react';
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import {AuthContext} from "../../context/Auth.Context";
import {useHttp} from "../../hooks/http.hook";
import {$host} from "../../http";
import "../../pdf_style.css"
import {baseUrl} from "../baseRoute";

export const Lay = ({form, setForm, createMaket}) => {

    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [menu, setMenu] = useState()
    const [filter, setFilter] = useState()
    const [kpi, setKpi] = useState()
    const [visual, setVisual] = useState()
    const [report, setReport] = useState()
    const [charts, setCharts] = useState()
    const [graphs, setGraphs] = useState([
        {id:1, id_g:'', title:"", img:'', desc:''},
        {id:2, id_g:'', title:"", img:'', desc:''},
        {id:3, id_g:'', title:"", img:'', desc:''},
        {id:4, id_g:'', title:"", img:'', desc:''},
        {id:5, id_g:'', title:"", img:'', desc:''},
        {id:6, id_g:'', title:"", img:'', desc:''}
    ])



    const getMenu = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/menu/${form.menu_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const m = res.data;
                setMenu(m)
            })
        } catch (e){

        }
    }, [token, form.menu_id, request ]);


    const getFilter = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/filter/${form.filter_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const f = res.data;
                setFilter(f)
            })
        } catch (e){

        }
    }, [token, form.filter_id, request ]);

    const getKpi = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/kpi/${form.kpi_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const k = res.data;
                setKpi(k)
            })
        } catch (e){

        }
    }, [token, form.kpi_id, request ]);

    const getVisual = useCallback(async ()=>{
        try{
            const fetched = await $host.get(`/api/visual/${form.visual_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const v = res.data;
                setVisual(v)
            })
        } catch (e){

        }
    }, [token, form.visual_id, request ]);

    const getReport = useCallback(async ()=>{
        console.log("getrep", form);
        try{
            const fetched = await $host.get(`/api/report/${form.report_id}`, {
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const r = res.data;
                setReport(r)
            })
        } catch (e){

        }
    }, [token, form.report_id, request ]);

    const getCharts = useCallback(async ()=>{
        console.log("getch", form);
        try{
            const params = {
                g1: form.g1,
                g2: form.g2,
                g3: form.g3,
                g4: form.g4,
                g5: form.g5,
                g6: form.g6
            };
            const fetched = await $host.get(`/api/chart/exportReport/charts`, {
                params,
                headers:{
                    authorization:"Bearer "+token,
                }
            }).then(res => {
                const c = res.data;
                setCharts(c);
            })
        } catch (e){

        }
    }, [token, form, request ]);

    useEffect( () =>{
        getMenu()
        getFilter()
        getKpi()
        getVisual()
        getReport()
        getCharts()
    }, [getMenu, getFilter, getKpi, getVisual, getReport, getCharts])


    const box = React.useRef(null);
    const pdfExportComponent = React.useRef(null);
    const exportPDFWithMethod = () => {
        let element = box.current || document.body;
        savePDF(element, {
            paperSize: "auto",
            margin: 40,
            fileName: `Report for ${new Date().getFullYear()}`
        });
    }

    if(charts){
        console.log("cc", charts);

        graphs[0].id_g = form.g1;
        graphs[0].desc = form.g1_title;
        graphs[1].id_g = form.g2;
        graphs[1].desc = form.g2_title;
        graphs[2].id_g = form.g3;
        graphs[2].desc = form.g3_title;
        graphs[3].id_g = form.g4;
        graphs[3].desc = form.g4_title;
        graphs[4].id_g = form.g5;
        graphs[4].desc = form.g5_title;
        graphs[5].id_g = form.g6;
        graphs[5].desc = form.g6_title;

        console.log("gg", graphs);

        for (var i = 0; i < graphs.length; i++) {
            for (var k = 0; k < charts.length; k++){
                if(Number(graphs[i].id_g) === charts[k].constructor_chart){
                    graphs[i].title = charts[k].title;
                    graphs[i].img = charts[k].layout_img;
                }
            }
        }
    }

    function emailHandler(event) {
        document.getElementById("comment_email").value = event.target.value;
    }
    function costHandler(event) {
        document.getElementById("comment_cost").value = event.target.value;
    }
    function clientHandler(event) {
        document.getElementById("comment_client").value = event.target.value;
    }
    function employerHandler(event) {
        document.getElementById("comment_employer").value = event.target.value;
    }
    function companyHandler(event) {
        document.getElementById("comment_company").value = event.target.value;
    }
    function pmHandler(event) {
        document.getElementById("comment_pm").value = event.target.value;
    }

    console.log(charts);

    return(
        <fieldset style={{backgroundColor: 'white'}}>
            <div className="row container-fluid w-100 p-0 m-0">
                <div className="col-12 px-0">
                    <div className="background_title">
                        <h3 className="px-4 py-1 text-white">Представление отчета</h3>
                    </div>
                </div>
                <div className="col-12 mt-4">
                    <div className="row justify-content-center">
                        <div className="col-8" style={{marginRight:'20px'}}>
                            <p className="px-3">Предпросмотр документа</p>
                            <div className="pt-4 maket" id="maket">
                                {menu && kpi && filter && visual && report ?
                                <PDFExport ref={pdfExportComponent} paperSize="auto" margin={20} fileName={`Report for ${new Date().getFullYear()}`}>
                                    <div ref={box}>
                                        <h5 className="text-center">Техническое описание отчета</h5>
                                        <hr className="k-hr"/>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row px-4">
                                                    <h6 className="mt-3"><strong>Компоненты</strong></h6>
                                                    <div className="col-3">
                                                        <p>{menu.title}</p>
                                                        <img src={baseUrl+`/mini/${menu.layout_img}`}/>
                                                    </div>
                                                    <div className="col-3">
                                                        <p>{filter.title}</p>
                                                        <img src={baseUrl+`/mini/${filter.layout_img}`}/>
                                                    </div>
                                                    <div className="col-3">
                                                        <p>{kpi.title}</p>
                                                        <img src={baseUrl+`/mini/${kpi.layout_img}`}/>
                                                    </div>
                                                    <div className="col-3">
                                                        <p>{visual.title}</p>
                                                        <img src={baseUrl+`/mini/${visual.layout_img}`}/>
                                                    </div>
                                                </div>
                                                <div className="row px-4">
                                                    <div className="h6 mt-3"><strong>Форма отчетности</strong> </div>
                                                    <div className="h6 mt-1">{report.title}</div>

                                                    <h6 className="mt-3"><strong>Графики</strong></h6>
                                                    {charts ?
                                                        <div className="row">
                                                            <div className="col-10 row">
                                                                <div className="col-4 mb-2" id="1"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input1" value={form.g1_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[0].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[0].title}</p>
                                                                    </figure>
                                                                </div>
                                                                <div className="col-4 mb-2" id="2"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input2" value={form.g2_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[1].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[1].title}</p>
                                                                    </figure>
                                                                </div>
                                                                <div className="col-4 mb-2" id="3"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input3" value={form.g3_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[2].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[2].title}</p>
                                                                    </figure>
                                                                </div>
                                                                <div className="col-4 mb-4" id="4"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input4" value={form.g4_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[3].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[3].title}</p>
                                                                    </figure>
                                                                </div>
                                                                <div className="col-4 mb-4" id="5"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input5" value={form.g5_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[4].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[4].title}</p>
                                                                    </figure>
                                                                </div>
                                                                <div className="col-4 mb-4" id="6"
                                                                     style={{paddingLeft: "20px", paddingRight: "1px"}}>
                                                                    <input type="text" name="input_group"
                                                                           className="form-control form-control-sm mb-1"
                                                                           id="input6" value={form.g6_title} disabled/>
                                                                    <img className="pdf_img"
                                                                         src={baseUrl + `/graph/${graphs[5].img}`}/>
                                                                    <figure className="text-end">
                                                                        <p>{graphs[5].title}</p>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    :
                                                        <div className="h6 mt-1">Графики не указаны</div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="k-hr"/>
                                        <h6 className="px-4" >Комментарии</h6>
                                        <ul style={{listStyle:'none'}}>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Email</strong></p>
                                                <input style={{border:"none"}} id="comment_email"/>
                                            </li>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Заказчик</strong>
                                                </p><input style={{border:"none"}} id="comment_client"/>
                                            </li>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Проектный менеджер</strong>
                                                </p><input style={{border:"none"}} id="comment_pm"/>
                                            </li>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Исполнитель</strong>
                                                </p><input style={{border:"none"}} id="comment_employer"/>
                                            </li>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Компания</strong>
                                                </p><input style={{border:"none"}} id="comment_company"/>
                                            </li>
                                            <li className="mb-3">
                                                <p className="mb-1"><strong>Прогнозируемая цена</strong>
                                                </p><input style={{border:"none"}} id="comment_cost"/>
                                            </li>
                                        </ul>
                                    </div>
                                </PDFExport>
                                    : <h6>loading...</h6>}
                            </div>
                        </div>
                        <div className="col-3">
                            <form>
                                <h5 className="pt-0 pb-2">Комментарии к отчету</h5>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control form-control-sm" id="floatingInput" onChange={emailHandler}/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={clientHandler}/>
                                    <label htmlFor="floatingInput">Заказчик</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={pmHandler}/>
                                    <label htmlFor="floatingInput">Проектный менеджер</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={employerHandler}/>
                                    <label htmlFor="floatingInput">Исполнитель</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={companyHandler}/>
                                    <label htmlFor="floatingInput">Компания</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingInput" onChange={costHandler}/>
                                    <label htmlFor="floatingInput">Прогнозируемая цена</label>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button_place">
                <div className="row col-12 justify-content-end py-2">
                    {/*<input type="button" name="previous" className="previous action-button shadow" value="Вернуться"/>*/}
                    <button type="button" name="next"
                            className="col-3 save_btn action-button shadow"
                            onClick={exportPDFWithMethod}
                    >
                        <i className="fas fa-file-download"></i> Скачать PDF</button>
                </div>
            </div>
        </fieldset>
    )
};
