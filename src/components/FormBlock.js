import React, {useCallback, useContext, useEffect, useState} from 'react'
import {Menu_03} from "./menu/menu_0.3";
import {Menu_06} from "./menu/menu_0.6";
import $ from "jquery";
import {Link, useParams} from "react-router-dom";
import {Menu_01} from "./menu/menu_0.1";
import {Menu_02} from "./menu/menu_0.2";
import {Menu_04} from "./menu/menu_0.4";
import {Menu_05} from "./menu/menu_0.5";
import {Filter_01} from "./filter/filter_0.1.js";
import {Filter_02} from "./filter/filter_0.2";
import {Filter_03} from "./filter/filter_0.3";
import {Kpi_01} from "./kpi/kpi_0.1";
import {Kpi_02} from "./kpi/kpi_0.2";
import {Kpi_03} from "./kpi/kpi_0.3";
import {AuthContext} from "../context/Auth.Context";
import {useHttp} from "../hooks/http.hook";






export const FormBlock = ({menus, filters, kpis, visuals}) => {

    const {userId, token} = useContext(AuthContext)
    const {request, loading, error, clearError} = useHttp()
    const [form, setForm] = useState({
        menu_id: '', filter_id: '', kpi_id: '', visual_id:''
    });
    function openNav2() {
        if(document.getElementById("mySidenav2") && document.getElementById("mask")  )
        {
            document.getElementById("mySidenav2").style.height = "55%";
            // document.getElementById("mask").style.backgroundColor = "rgba(0,0,0)";
        }
    }
    function closeNav2() {
        if(document.getElementById("mySidenav2") )
        {
            document.getElementById("mySidenav2").style.height = "0";
        }

    }

    function openNav() {
        if(document.getElementById("mySidenav") && document.getElementById("mask")  )
        {
            document.getElementById("mySidenav").style.width = "20%";
            // document.getElementById("mask").style.backgroundColor = "rgba(0,0,0)";
        }
    }
    function closeNav() {
        if(document.getElementById("mySidenav") )
        {
            document.getElementById("mySidenav").style.width = "0";
        }

    }

    function openFil() {
        if(document.getElementById("SideFil") )
        {
            document.getElementById("SideFil").style.width = "30%";
        }
    }
    function closeFil() {
        if(document.getElementById("SideFil") )
        {
            document.getElementById("SideFil").style.width = "0";
        }

    }

    const addLayouthandler = async () => {
        try {
             const data = await request('/api/layout/', 'POST', {...form}, {
                 Authorization : `Bearer ${token}`
             })
            console.log('Data', data);
             await makeLayout(data);


        } catch (e) {}
    }

    const makeLayout = async (data) =>{
        var id_l = data.current_layout['new_id'].id_layout;
        var m = data.current_layout['new_id'].menu_id;
        var f = data.current_layout['new_id'].filter_id;
        var k = data.current_layout['new_id'].kpi_id;
        var v = data.current_layout['new_id'].visual_id;

        //menu
        var code_menu_2 = ' <div class="d-flex flex-column bd-highlight nav1">\
                                    <div class="nav-item hovervariant py-2">\
                                        <a href="#"\
                                           class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                           aria-expanded="false">\
                                            <div class="logo1" style={{width:"2.5em", height:"2.5em"}}/>\
                                        </a>\
                                    </div>\
                                    <div class="nav-item hovervariant py-2">\
                                        <a href="#"\
                                           class="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"\
                                           aria-expanded="false">\
                                            <div class="logo2" style={{width:"2.5em", height:"2.5em"}}/>\
                                        </a>\
                                    </div>\
                                    <div class="nav-item hovervariant py-2">\
                                        <a href="#"\
                                           class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                           aria-expanded="false">\
                                            <div class="logo3" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        </a>\
                                    </div>\
                                    <div className="nav-item hovervariant py-2">\
                                        <a href="#"\
                                           class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                           aria-expanded="false">\
                                            <div class="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        </a>\
                                    </div>\
                                    <div class="nav-item hovervariant py-2">\
                                        <a href="#"\
                                           class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                           aria-expanded="false">\
                                           <div class="logo5" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        </a>\
                                    </div>\
                                </div>';
        var code_menu_3 = ' <div class=" d-flex flex-column bd-highlight nav2">\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo1" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        <a href="#" class="nav-link textchengecolor">Page1</a>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo2" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page2</a>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo3" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page3</a>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page4</a>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo5" style={{width:"2.5em", height:"2.5em"}}></div>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page5</a>\
                                    </a>\
                                </div>\
                            </div>';
        var code_menu_4 = '<ul class="nav justify-content-center boarder">\
                            <li class="nav-item">\
                                <a class="nav-link titletext active" href="#">Dashboard page 1</a>\
                            </li>\
                            <li class="nav-item">\
                                <a class="nav-link titletext"  href="#">Dashboard page 2</a>\
                            </li>\
                            <li class="nav-item">\
                                <a class="nav-link titletext"  href="#">Dashboard page 3</a>\
                            </li>\
                        </ul>';
        var code_menu_5 = '<div id="mySidenav" class="sidenav shadow">\
               <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>\
                <ul class="nav nav-pills flex-column mb-auto for_ham">\
                    <li class="nav-item"> <a href="#" class="nav-link"> Dashboard page 1 </a> </li>\
                    <li> <a href="#" class="nav-link"> Dashboard page 2 </a> </li>\
                    <li> <a href="#" class="nav-link"> Dashboard page 3</a> </li>\
                    <li> <a href="#" class="nav-link">   Dashboard page 4 </a> </li>\
                    <li> <a href="#" class="nav-link">   Dashboard page 5 </a></li>\
                </ul>\
                </div>\
                            <div class="col-12 pl-0">\
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav()} class="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
                    </svg>\
                </div>';
        var code_menu_6 = '<div id="mySidenav2" class="sidenav2 shadow">\
                            <a href="javascript:void(0)" class="d-flex justify-content-center closebtn2" onclick={closeNav2}>&times;</a>\
                            <div class=" d-flex flex-column bd-highlight">\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo1" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo2" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#"\
                                       class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
                                       aria-expanded="false">\
                                        <div class="logo3" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false">\
                                        <div class="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div class="nav-item hovervariant py-2">\
                                    <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false"> <div class="logo5" style={{width:"2.5em", height:"2.5em"}}></div> </a>\
                                </div>\
                            </div>\
                        </div>\
                            <div class="col-12 pl-0">\
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav2} className="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
                            </svg>\
                        </div>';
        var code_menu_7 = '<div id="exTab3" class="container">\
                                <ul class="nav nav-pills mx-0">\
                                    <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                    <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                    <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                </ul>\
                            </div>';
        //menu

        //filter
        var code_fil_1 = '<div class="d-flex z-filter h-100 w-100">\
                                <form class="first_form col-12">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter2</option> </select>\
                                    <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter6</option> </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter7</option> </select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                    </select>\
                       </form>\
                            </div>';
        var code_fil_2 = '<div class="z-filter2">\
                                <form class="row mx-1 mt-1" role="form">\
                                    <div class="col-3"><select class="form-select form-select-sm">\ <option selected>Filter1</option> </select></div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter2</option></select> </div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter3</option></select></div>\
                                    <div class="col-3"> <select class="form-select form-select-sm"><option selected>Filter4</option></select> </div>\
                                </form>\
                          </div>';
        var code_fil_3 = '<div id="SideFil" class="row SideFil">\
                                <form class="second_form col-11">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter2</option></select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                   </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"><option selected>Filter8</option> </select>\
                                </form>\
                                <a href="javascript:void(0)" className="col-1 px-0 closebtnf" onClick={closeFil}><className="logoLine " style={{width:"0.5em", height:"3em"}}/></a>\
                            </div>\
                            <div class=" d-flex flex-column bd-highlight nav3">\
                                <div className="nav-item hovervariant py-2">\
                                    <a href="#" className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none" aria-expanded="false">\
                                        <div className="logo1" style={{width:"2.5em", height:"2.5em"}}/>\
                                    </a>\
                                </div>\
                              <div className="nav-item hovervariant py-2">\
                                    <a href="#" className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none" aria-expanded="false">\
                                        <div className="logo2" style={{width:"2.5em", height:"2.5em"}}/>\
                                    </a>\
                                </div>\
                                <div className="nav-item hovervariant py-2">\
                                    <a href="#" className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"  aria-expanded="false">\
                                        <div className="logo3" style={{width:"2.5em", height:"2.5em"}}/>\
                                    </a>\
                                </div>\
                                <div className="nav-item hovervariant py-2">\
                                    <a href="#" className="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none" aria-expanded="false">\
                                        <div className="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div className="nav-item hovervariant py-2">\
                                    <a href="#" className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none" aria-expanded="false">\
                                        <div className="logo5" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                                </div>\
                                <div className="nav-item hovervariant py-2">\
                                    <a href="#" onClick={openFil} className="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none" aria-expanded="false">\
                                        <div className="logo6" style={{width:"2.5em", height:"2.5em"}}></div>\
                                    </a>\
                               </div>\
                            </div>\
                        </div>';
        //filter

        //kpi
        var code_kpi_4 = ' <div class="p_card">\
                  <div class="card">\
                      <div class="text-center mb-0 title_kpi">Title1</div>\
                      <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                      <div class="text-center green_kpi"> &#8679; +15%</div>\
                   </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                     <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                     <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                     </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                    <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                   <div class="card">\
                     <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center green_kpi"> &#8679; +15%</div>\
                    </div>\
                   <div class="card">\
                      <div class="card-title text-center mb-0 title_kpi">Title1</div>\
                      <div class="card-body p-0">\
                        <div class="card-title text-center mb-0 num_kpi">7854 млн</div>\
                      </div>\
                      <div class="card-text text-center red_kpi"> &#8681; -0.98%</div>\
                    </div>\
                  </div>';
        var code_kpi_5 = '<div class="box_card2">\
                            <div class="col-12">\
                                <div class="row p_card2 px-2">\
                                   <div class="col-md-2 mb-6 px-1">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
        var code_kpi_6 = ' <div class="p_card3">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi3">7854 млн</div>\
                                            <div class="text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                           <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                           <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                           <div class="card-text text-center green_kpi3"> &#8679; +15%</div>\
                                        </div>\
                                        <div class="card">\
                                            <div class="card-title text-center mb-0 title_kpi3">Title1</div>\
                                            <div class="card-title text-center mb-0 num_kpi3">7854 млн</div>\
                                            <div class="card-text text-center red_kpi3"> &#8681; -0.98%</div>\
                                        </div>\
                                 </div>';
        //kpi


        var board = document.getElementById("maket");
        board.classList.add('row');
        console.log(board);

        if(m === 2)
        {
            var menu1 = document.createElement("div");
            menu1.classList.add('col-1');
            menu1.classList.add('h-100');
            menu1.innerHTML = code_menu_2;
            board.appendChild(menu1);
                var other_placem1 = document.createElement("div");
                other_placem1.classList.add('col-11');
                board.appendChild(other_placem1);
                    var other_columnm1 = document.createElement("div");
                    other_columnm1.classList.add('row');
                    other_placem1.appendChild(other_columnm1);
            if(f===1)
            {
                var m1fil1 = document.createElement("div");
                m1fil1.classList.add('col-3');
                m1fil1.classList.add('mx-0');
                m1fil1.classList.add('px-0');
                m1fil1.classList.add('position-relative');
                m1fil1.innerHTML = code_fil_1;
                other_columnm1.appendChild(m1fil1);
                if(k===4)
                {
                    var kpi4 = document.createElement("div");
                    kpi4.classList.add('col-2');
                    kpi4.classList.add('position-relative');
                    kpi4.innerHTML = code_kpi_4;
                    other_columnm1.appendChild(kpi4);
                }
                if(k===5)
                {
                    var kpi5 = document.createElement("div");
                    kpi5.classList.add('col-9');
                    kpi5.classList.add('position-relative');
                    kpi5.innerHTML = code_kpi_5;
                    other_columnm1.appendChild(kpi5);
                }
                if(k===6)
                {
                    var kpi6 = document.createElement("div");
                    kpi6.classList.add('col-4');
                    kpi6.classList.add('position-relative');
                    kpi6.style.left = '50%';
                    kpi6.innerHTML = code_kpi_6;
                    other_columnm1.appendChild(kpi6);
                }

            }
            else if(f===2)
            {
                var m1fil2 = document.createElement("div");
                m1fil2.classList.add('col-12');
                m1fil2.classList.add('position-relative');
                m1fil2.innerHTML = code_fil_2;
                other_columnm1.appendChild(m1fil2);

                if(k===4)
                {
                    var f2kpi4 = document.createElement("div");
                    f2kpi4.classList.add('col-3');
                    f2kpi4.classList.add('position-relative');
                    f2kpi4.style.marginTop = '10%';
                    f2kpi4.innerHTML = code_kpi_4;
                    other_columnm1.appendChild(f2kpi4);
                }
                if(k===5)
                {
                    var f2kpi5 = document.createElement("div");
                    f2kpi5.classList.add('col-12');
                    f2kpi5.classList.add('position-relative');
                    f2kpi5.style.marginTop = '10%';
                    f2kpi5.innerHTML = code_kpi_5;
                    other_columnm1.appendChild(f2kpi5);
                }
                if(k===6)
                {
                    var f2kpi6 = document.createElement("div");
                    f2kpi6.classList.add('col-3');
                    f2kpi6.classList.add('position-relative');
                    f2kpi6.style.marginLeft = '80%';
                    f2kpi6.style.marginTop = '10%';
                    f2kpi6.innerHTML = code_kpi_6;
                    other_columnm1.appendChild(f2kpi6);
                }

            }
            else if(f===3)
            {
                board.removeChild(menu1);
                var m1fil3 = document.createElement("div");
                m1fil3.classList.add('col-1');
                m1fil3.classList.add('h-100');
                m1fil3.innerHTML = code_fil_3;
                board.insertBefore(m1fil3, board.firstChild);
                if(k===4)
                {
                    var f3kpi4 = document.createElement("div");
                    f3kpi4.classList.add('col-3');
                    f3kpi4.classList.add('position-relative');
                    f3kpi4.innerHTML = code_kpi_4;
                    other_columnm1.appendChild(f3kpi4);
                }
                if(k===5)
                {
                    var f3kpi5 = document.createElement("div");
                    f3kpi5.classList.add('col-12');
                    f3kpi5.classList.add('position-relative');
                    f3kpi5.innerHTML = code_kpi_5;
                    other_columnm1.appendChild(f3kpi5);
                }
                if(k===6)
                {
                    var f3kpi6 = document.createElement("div");
                    f3kpi6.classList.add('col-3');
                    f3kpi6.classList.add('position-relative');
                    f3kpi6.style.left = '80%';
                    f3kpi6.innerHTML = code_kpi_6;
                    other_columnm1.appendChild(f3kpi6);
                }
            }

        }
        else if(m === 3)
        {
            var menu2 = document.createElement("div");
            menu2.classList.add('col-2');
            menu2.innerHTML = code_menu_3;
            board.appendChild(menu2);
                var other_placem2 = document.createElement("div");
                other_placem2.classList.add('col-10');
                board.appendChild(other_placem2);
                    var other_columnm2 = document.createElement("div");
                    other_columnm2.classList.add('row');
                    other_placem2.appendChild(other_columnm2);
            if(f===1)
            {
                var m2fil1 = document.createElement("div");
                m2fil1.classList.add('col-3');
                m2fil1.classList.add('mx-0');
                m2fil1.classList.add('px-0');
                m2fil1.classList.add('position-relative');
                m2fil1.innerHTML = code_fil_1;
                other_columnm2.appendChild(m2fil1);
                if(k===4)
                {
                    var m2f1kpi4 = document.createElement("div");
                    m2f1kpi4.classList.add('col-2');
                    m2f1kpi4.classList.add('position-relative');
                    m2f1kpi4.innerHTML = code_kpi_4;
                    other_columnm2.appendChild(m2f1kpi4);
                }
                if(k===5)
                {
                    var m2f1kpi5 = document.createElement("div");
                    m2f1kpi5.classList.add('col-9');
                    m2f1kpi5.classList.add('position-relative');
                    m2f1kpi5.innerHTML = code_kpi_5;
                    other_columnm2.appendChild(m2f1kpi5);
                }
                if(k===6)
                {
                    var m2f1kpi6 = document.createElement("div");
                    m2f1kpi6.classList.add('col-2');
                    m2f1kpi6.classList.add('position-relative');
                    m2f1kpi6.style.left = '50%';
                    m2f1kpi6.innerHTML = code_kpi_6;
                    other_columnm2.appendChild(m2f1kpi6);
                }

            }
            else if(f===2)
            {
                var m2fil2 = document.createElement("div");
                m2fil2.classList.add('col-12');
                m2fil2.classList.add('position-relative');
                m2fil2.innerHTML = code_fil_2;
                other_columnm2.appendChild(m2fil2);
                if(k===4)
                {
                    var m2f2kpi4 = document.createElement("div");
                    m2f2kpi4.classList.add('col-3');
                    m2f2kpi4.classList.add('position-relative');
                    m2f2kpi4.style.marginTop = '10%';
                    m2f2kpi4.innerHTML = code_kpi_4;
                    other_columnm2.appendChild(m2f2kpi4);
                }
                if(k===5)
                {
                    var m2f2kpi5 = document.createElement("div");
                    m2f2kpi5.classList.add('col-12');
                    m2f2kpi5.classList.add('position-relative');
                    m2f2kpi5.style.marginTop = '10%';
                    m2f2kpi5.innerHTML = code_kpi_5;
                    other_columnm2.appendChild(m2f2kpi5);
                }
                if(k===6)
                {
                    var m2f2kpi6 = document.createElement("div");
                    m2f2kpi6.classList.add('col-3');
                    m2f2kpi6.classList.add('position-relative');
                    m2f2kpi6.style.marginLeft = '80%';
                    m2f2kpi6.style.marginTop = '10%';
                    m2f2kpi6.innerHTML = code_kpi_6;
                    other_columnm2.appendChild(m2f2kpi6);
                }

            }
            else if(f===3)
            {
                board.removeChild(menu2);
                var m2fil3 = document.createElement("div");
                m2fil3.classList.add('col-1');
                m2fil3.classList.add('h-100');
                m2fil3.innerHTML = code_fil_3;
                board.insertBefore(m2fil3, board.firstChild);
                if(k===4)
                {
                    var m2f3kpi4 = document.createElement("div");
                    m2f3kpi4.classList.add('col-3');
                    m2f3kpi4.classList.add('position-relative');
                    m2f3kpi4.innerHTML = code_kpi_4;
                    other_columnm2.appendChild(m2f3kpi4);
                }
                if(k===5)
                {
                    var m2f3kpi5 = document.createElement("div");
                    m2f3kpi5.classList.add('col-12');
                    m2f3kpi5.classList.add('position-relative');
                    m2f3kpi5.innerHTML = code_kpi_5;
                    other_columnm2.appendChild(m2f3kpi5);
                }
                if(k===6)
                {
                    var m2f3kpi6 = document.createElement("div");
                    m2f3kpi6.classList.add('col-3');
                    m2f3kpi6.classList.add('position-relative');
                    m2f3kpi6.style.left = '70%';
                    m2f3kpi6.innerHTML = code_kpi_6;
                    other_columnm2.appendChild(m2f3kpi6);
                }
            }
        }
        else if(m === 4 || m === 7)
        {
            var menu3 = document.createElement("div");
            menu3.classList.add('col-12');
            menu3.innerHTML = eval("code_menu_"+m);
            board.appendChild(menu3);
                var other_placem3 = document.createElement("div");
                other_placem3.classList.add('col-12');
                board.appendChild(other_placem3);
                    var other_columnm3 = document.createElement("div");
                    other_columnm3.classList.add('row');
                    other_placem3.appendChild(other_columnm3);
            if(f===1)
            {
                var m3fil1 = document.createElement("div");
                m3fil1.classList.add('col-3');
                m3fil1.classList.add('mx-0');
                m3fil1.classList.add('px-0');
                m3fil1.classList.add('position-relative');
                m3fil1.innerHTML = code_fil_1;
                other_columnm3.appendChild(m3fil1);
                if(k===4)
                {
                    var m3f1kpi4 = document.createElement("div");
                    m3f1kpi4.classList.add('col-2');
                    m3f1kpi4.classList.add('position-relative');
                    m3f1kpi4.innerHTML = code_kpi_4;
                    other_columnm3.appendChild(m3f1kpi4);
                }
                if(k===5)
                {
                    var m3f1kpi5 = document.createElement("div");
                    m3f1kpi5.classList.add('col-9');
                    m3f1kpi5.classList.add('position-relative');
                    m3f1kpi5.innerHTML = code_kpi_5;
                    other_columnm3.appendChild(m3f1kpi5);
                }
                if(k===6)
                {
                    var m3f1kpi6 = document.createElement("div");
                    m3f1kpi6.classList.add('col-2');
                    m3f1kpi6.classList.add('position-relative');
                    m3f1kpi6.style.left = '70%';
                    m3f1kpi6.innerHTML = code_kpi_6;
                    other_columnm3.appendChild(m3f1kpi6);
                }

            }
            else if(f===2)
            {
                var m3fil2 = document.createElement("div");
                m3fil2.classList.add('col-12');
                m3fil2.classList.add('position-relative');
                m3fil2.innerHTML = code_fil_2;
                other_columnm3.appendChild(m3fil2);
                if(k===4)
                {
                    var m3f2kpi4 = document.createElement("div");
                    m3f2kpi4.classList.add('col-3');
                    m3f2kpi4.classList.add('position-relative');
                    m3f2kpi4.style.marginTop = '10%';
                    m3f2kpi4.innerHTML = code_kpi_4;
                    other_columnm3.appendChild(m3f2kpi4);
                }
                if(k===5)
                {
                    var m3f2kpi5 = document.createElement("div");
                    m3f2kpi5.classList.add('col-12');
                    m3f2kpi5.classList.add('position-relative');
                    m3f2kpi5.style.marginTop = '10%';
                    m3f2kpi5.innerHTML = code_kpi_5;
                    other_columnm3.appendChild(m3f2kpi5);
                }
                if(k===6)
                {
                    var m3f2kpi6 = document.createElement("div");
                    m3f2kpi6.classList.add('col-3');
                    m3f2kpi6.classList.add('position-relative');
                    m3f2kpi6.style.marginLeft = '80%';
                    m3f2kpi6.style.marginTop = '10%';
                    m3f2kpi6.innerHTML = code_kpi_6;
                    other_columnm3.appendChild(m3f2kpi6);
                }

            }
            else if(f===3)
            {
                // board.removeChild(menu3);
                var m3fil3 = document.createElement("div");
                m3fil3.classList.add('position-absolute');
                m3fil3.style.left = '0px';
                m3fil3.style.top = '85%';
                m3fil3.innerHTML = code_fil_3;
                board.appendChild(m3fil3);
                if(k===4)
                {
                    var m3f3kpi4 = document.createElement("div");
                    m3f3kpi4.classList.add('col-3');
                    m3f3kpi4.classList.add('position-relative');
                    m3f3kpi4.innerHTML = code_kpi_4;
                    //other_columnm3.appendChild(m3f3kpi4);
                    other_columnm3.insertBefore(m3f3kpi4, other_columnm3.firstChild);
                }
                if(k===5)
                {
                    var m3f3kpi5 = document.createElement("div");
                    m3f3kpi5.classList.add('col-12');
                    m3f3kpi5.classList.add('position-relative');
                    m3f3kpi5.innerHTML = code_kpi_5;
                    other_columnm3.insertBefore(m3f3kpi5, other_columnm3.firstChild);
                }
                if(k===6)
                {
                    var m3f3kpi6 = document.createElement("div");
                    m3f3kpi6.classList.add('col-3');
                    m3f3kpi6.classList.add('position-relative');
                    m3f3kpi6.style.left = '70%';
                    m3f3kpi6.innerHTML = code_kpi_6;
                    other_columnm3.insertBefore(m3f3kpi6, other_columnm3.firstChild);
                }
            }

        }
        else if( m === 5 || m === 6)
        {
            var menu4 = document.createElement("div");
            menu4.classList.add('col-12');
            menu4.style.height = '5%';
            menu4.classList.add('position-relative');
            menu4.innerHTML = eval("code_menu_"+m);
            board.appendChild(menu4);
                var other_placem4 = document.createElement("div");
                other_placem4.classList.add('col-12');
                other_placem4.style.marginTop = '0px';
                board.appendChild(other_placem4);
                    var other_columnm4 = document.createElement("div");
                    other_columnm4.classList.add('row');
                    other_placem4.appendChild(other_columnm4);
            if(f===1)
            {
                var m4fil1 = document.createElement("div");
                m4fil1.classList.add('col-3');
                m4fil1.classList.add('mx-0');
                m4fil1.classList.add('px-0');
                m4fil1.classList.add('position-relative');
                m4fil1.innerHTML = code_fil_1;
                other_columnm4.appendChild(m4fil1);
                if(k===4)
                {
                    var m4f1kpi4 = document.createElement("div");
                    m4f1kpi4.classList.add('col-2');
                    m4f1kpi4.classList.add('position-relative');
                    m4f1kpi4.innerHTML = code_kpi_4;
                    other_columnm4.appendChild(m4f1kpi4);
                }
                if(k===5)
                {
                    var m4f1kpi5 = document.createElement("div");
                    m4f1kpi5.classList.add('col-9');
                    m4f1kpi5.classList.add('position-relative');
                    m4f1kpi5.innerHTML = code_kpi_5;
                    other_columnm4.appendChild(m4f1kpi5);
                }
                if(k===6)
                {
                    var m4f1kpi6 = document.createElement("div");
                    m4f1kpi6.classList.add('col-2');
                    m4f1kpi6.classList.add('position-relative');
                    m4f1kpi6.style.left = '70%';
                    m4f1kpi6.innerHTML = code_kpi_6;
                    other_columnm4.appendChild(m4f1kpi6);
                }

            }
            else if(f===2)
            {
                var m4fil2 = document.createElement("div");
                m4fil2.classList.add('col-12');
                m4fil2.classList.add('position-relative');
                m4fil2.innerHTML = code_fil_2;
                other_columnm4.appendChild(m4fil2);
                if(k===4)
                {
                    var m4f2kpi4 = document.createElement("div");
                    m4f2kpi4.classList.add('col-3');
                    m4f2kpi4.classList.add('position-relative');
                    m4f2kpi4.style.marginTop = '10%';
                    m4f2kpi4.innerHTML = code_kpi_4;
                    other_columnm4.appendChild(m4f2kpi4);
                }
                if(k===5)
                {
                    var m4f2kpi5 = document.createElement("div");
                    m4f2kpi5.classList.add('col-12');
                    m4f2kpi5.classList.add('position-relative');
                    m4f2kpi5.style.marginTop = '10%';
                    m4f2kpi5.innerHTML = code_kpi_5;
                    other_columnm4.appendChild(m4f2kpi5);
                }
                if(k===6)
                {
                    var m4f2kpi6 = document.createElement("div");
                    m4f2kpi6.classList.add('col-3');
                    m4f2kpi6.classList.add('position-relative');
                    m4f2kpi6.style.marginLeft = '80%';
                    m4f2kpi6.style.marginTop = '10%';
                    m4f2kpi6.innerHTML = code_kpi_6;
                    other_columnm4.appendChild(m4f2kpi6);
                }

            }
            else if(f===3)
            {
                // board.removeChild(menu3);
                var m4fil3 = document.createElement("div");
                m4fil3.classList.add('position-absolute');
                m4fil3.style.left = '0px';
                m4fil3.style.top = '85%';
                m4fil3.innerHTML = code_fil_3;
                board.appendChild(m4fil3);
                if(k===4)
                {
                    var m4fil3kpi4 = document.createElement("div");
                    m4fil3kpi4.classList.add('col-3');
                    m4fil3kpi4.classList.add('position-relative');
                    m4fil3kpi4.innerHTML = code_kpi_4;
                    other_columnm4.appendChild(m4fil3kpi4);
                }
                if(k===5)
                {
                    var m4f3kpi5 = document.createElement("div");
                    m4f3kpi5.classList.add('col-12');
                    m4f3kpi5.classList.add('position-relative');
                    m4f3kpi5.innerHTML = code_kpi_5;
                    other_columnm4.appendChild(m4f3kpi5);
                }
                if(k===6)
                {
                    var m4f3kpi6 = document.createElement("div");
                    m4f3kpi6.classList.add('col-3');
                    m4f3kpi6.classList.add('position-relative');
                    m4f3kpi6.style.left = '70%';
                    m4f3kpi6.innerHTML = code_kpi_6;
                    other_columnm4.appendChild(m4f3kpi6);
                }
            }
        }



    };



    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    $(document).ready(function(){

        var current_fs, next_fs, previous_fs;
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function(){

            current_fs = $(this).parent().parent();

            next_fs = $(this).parent().parent().next();

//Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
            next_fs.show();
//hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now) {
// for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({'opacity': opacity});
                },
                duration: 500
            });
            setProgressBar(++current);
        });

        $(".previous").click(function(){

            current_fs = $(this).parent().parent();
            previous_fs = $(this).parent().parent().prev();

//Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
            previous_fs.show();

//hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now) {
// for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({'opacity': opacity});
                },
                duration: 500
            });
            setProgressBar(--current);
        });

        function setProgressBar(curStep){
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
                .css("width",percent+"%")
        }

        $(".submit").click(function(){
            return false;
        })

    });

    $(function() {
        $("[name=visual_id]").click(function(){
            $('.toHide').hide();
            $("#blk-"+$(this).val()).show();
        });
    });

    $(function() {
        $("[name=togg]").click(function(){
            var a = $(this).attr('id');
            console.log(a);
            $('.Hide').hide();
            $('.RbHide').hide();
            $("#m-"+a).show();
            $("#rb_m-"+a).show();
        });
    });

    $(function() {
        $("[name=Ftogg]").click(function(){
            var a = $(this).attr('id');
          //  console.log(a);
            $('.FHide').hide();
            $('.Rb_fHide').hide();
            $("#f-"+a).show();
            $("#rb_f-"+a).show();
        });
    });

    $(function() {
        $("[name=Ktogg]").click(function(){
            var a = $(this).attr('id');
            console.log(a);
            $('.KHide').hide();
            $('.Rb_kHide').hide();
            $("#k-"+a).show();
            $("#rb_k-"+a).show();
        });
    });

    return(
        <div className="form mx-0 w-100">
            <div className="row">
                <form id="msform">
                    <fieldset>
                        <div className="row">
                            <h2 className="">Меню дашборда:</h2>
                        </div>
                        <div className="row">

                            <div className="col-10">
                                <div id="m-2" className="Hide">
                                    <Menu_01/>
                                </div>
                                <div id="m-3" className="Hide" style={{display:"none"}}>
                                    <Menu_02/>
                                </div>
                                <div id="m-4" className="Hide" style={{display:"none"}}>
                                    <Menu_03/>
                                </div>
                                <div id="m-5" className="Hide" style={{display:"none"}}>
                                    <Menu_04/>
                                </div>
                                <div id="m-6" className="Hide" style={{display:"none"}}>
                                    <Menu_05/>
                                </div>
                                <div id="m-7" className="Hide" style={{display:"none"}}>
                                    <Menu_06/>
                                </div>
                            </div>

                            <div className="col-2 position-relative">
                                <div className="praon29 p-0">
                                    { menus && menus.map((menu, index) => {
                                        return(
                                            <div className="praon30">
                                                <img src={`../images/miniVersion/${menu.layout_img}`}
                                                     name="togg"
                                                     id={`${menu.id_constructor_menu}`}
                                                />
                                            </div>
                                        );})}
                                </div>
                            </div>
                            <div className="col-12 py-3">
                                <div className="form-check RbHide" id="rb_m-2">
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Простое меню с лого
                                    </label>
                                </div>
                                <div className="form-check RbHide" id="rb_m-3"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "3"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Простое меню с названиями
                                    </label>
                                </div>
                                <div className="form-check RbHide" id="rb_m-4"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "4"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Меню кнопок
                                    </label>
                                </div>
                                <div className="form-check RbHide" id="rb_m-5"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "5"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Гамбургер с названиями
                                    </label>
                                </div>
                                <div className="form-check RbHide" id="rb_m-6"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "6"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Гамбургер с лого
                                    </label>
                                </div>
                                <div className="form-check RbHide" id="rb_m-7"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="menu_id"
                                           name="menu_id"
                                           onChange={changeHandler}
                                           value = "7"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Меню вкладок
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <input type="button" name="next" className="next action-button btn btn-primary me-md-2" value="Далее"/>
                        </div>

                    </fieldset>

                    <fieldset>
                        <div className="row">
                            <h2 className="">Фильтр дашборда:</h2>
                        </div>
                        <div className="row">
                            <div className="col-10">
                                <div id="f-1" className="FHide">
                                    <Filter_01/>
                                </div>
                                <div id="f-2" className="FHide" style={{display:"none"}}>
                                    <Filter_02/>
                                </div>
                                <div id="f-3" className="FHide" style={{display:"none"}}>
                                    <Filter_03/>
                                </div>
                            </div>
                            <div className="col-2 position-relative">
                                <div className="praon29 p-0">
                                    { filters && filters.map((filter, index) => {
                                        return(
                                            <div className="praon30">
                                                <img src={`../images/miniVersion/${filter.layout_img}`}
                                                     name="Ftogg"
                                                     id={`${filter.id_constructor_filter}`}
                                                />
                                            </div>
                                        );})}
                                </div>
                            </div>
                            <div className="col-12 py-3">
                                <div className="form-check Rb_fHide" id="rb_f-1">
                                    <input className="form-check-input"
                                           type="radio"
                                           id="filter_id"
                                           name="filter_id"
                                           onChange={changeHandler}
                                           value = "1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Расширеный фильтр
                                    </label>
                                </div>
                                <div className="form-check Rb_fHide" id="rb_f-2"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="filter_id"
                                           name="filter_id"
                                           onChange={changeHandler}
                                           value = "2"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Сокращенный фильтр
                                    </label>
                                </div>
                                <div className="form-check Rb_fHide" id="rb_f-3"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="filter_id"
                                           name="filter_id"
                                           onChange={changeHandler}
                                           value = "3"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Модальный фильтр
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <input type="button" name="previous" className="btn btn-primary me-md-2 previous action-button-previous"
                                   value="Назад"/>
                            <input type="button" name="next" className="btn btn-primary me-md-2 next action-button" value="Далее"/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="row">
                            <h2 className="">Показатели дашборда:</h2>
                        </div>
                        <div className="row">

                            <div className="col-10">
                                <div id="k-4" className="KHide">
                                    <Kpi_01/>
                                </div>
                                <div id="k-5" className="KHide" style={{display:"none"}}>
                                    <Kpi_02/>
                                </div>
                                <div id="k-6" className="KHide" style={{display:"none"}}>
                                    <Kpi_03/>
                                </div>
                            </div>
                            <div className="col-2 position-relative">
                                <div className="praon29 p-0">
                                    { kpis && kpis.map((kpi, index) => {
                                        return(
                                            <div className="praon30">
                                                <img src={`../images/miniVersion/${kpi.layout_img}`}
                                                     name="Ktogg"
                                                     id={`${kpi.id_constructor_kpi}`}
                                                />
                                            </div>
                                        );})}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-check Rb_kHide" id="rb_k-4">
                                    <input className="form-check-input"
                                           type="radio"
                                           id="kpi_id"
                                           name="kpi_id"
                                           onChange={changeHandler}
                                           value = "4"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Показатели слева
                                    </label>
                                </div>
                                <div className="form-check Rb_kHide" id="rb_k-5"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="kpi_id"
                                           name="kpi_id"
                                           onChange={changeHandler}
                                           value = "5"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Показатели по центру
                                    </label>
                                </div>
                                <div className="form-check Rb_kHide" id="rb_k-6"  style={{display:"none"}}>
                                    <input className="form-check-input"
                                           type="radio"
                                           id="kpi_id"
                                           name="kpi_id"
                                           onChange={changeHandler}
                                           value = "6"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Показатели справа
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <input type="button" name="previous" className="btn btn-primary me-md-2 previous action-button-previous"
                                   value="Назад"/>
                            <input type="button" name="next" className="btn btn-primary me-md-2 next action-button" value="Далее"/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="row">
                            <h2 className="">Визуализация данных:</h2>
                        </div>
                        <div className="row">

                            <div className="col-6">
                                { visuals && visuals.map((visual, index) => {
                                    return(
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                   type="radio"
                                                   name="visual_id"
                                                   onChange={changeHandler}
                                                   id={`rdb-${visual.id_constructor_visual}`}
                                                   value={`${visual.id_constructor_visual}`}/>
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                {visual.title}
                                            </label>
                                        </div>
                                    );})}

                            </div>
                            <div className="col-6 ">
                                { visuals && visuals.map((visual, index) => {
                                    return(
                                        <div id={`blk-${visual.id_constructor_visual}`} className="row toHide px-0 " style={{display:"none"}}>
                                            <div className="col-md-12 mb-2">
                                                <Link >
                                                    <div className="card">
                                                        <img src={`/images/miniVersion/${visual.layout_img}`}/>
                                                    </div>
                                                </Link>
                                            </div>

                                        </div>
                                    );})}
                            </div>
                        </div>
                        <div className="col-6">
                            <input type="button" name="previous" className="btn btn-primary me-md-2 previous action-button-previous"
                                   value="Назад"/>
                            <input type="button"
                                   name="next"
                                   className="btn btn-primary me-md-2 next action-button"
                                   value="Собрать дашборд"
                                   onClick={addLayouthandler}
                                // disabled={loading}
                            />
                        </div>

                    </fieldset>

                    <fieldset>
                        <div className="row">
                            <h2 className="">Макет Вашего дашборд:</h2>
                        </div>
                        <div className="row" >
                            <div className="maket" id="maket">

                            </div>
                        </div>
                    </fieldset>

                    <ul id="progressbar" className="fixed-bottom">
                        <li className="active" id="menu"><strong>Account</strong></li>
                        <li id="filter"><strong>Personal</strong></li>
                        <li id="kpi"><strong>Image</strong></li>
                        <li id="visual"><strong>Finish</strong></li>
                        <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                </form>

            </div>
        </div>
    )
}
