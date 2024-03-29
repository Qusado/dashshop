import React from "react";
import {MakeLayoutFunction} from "./makeLayoutFunction";
import {KPI_modal} from "./modal_kpi/KPI_modal";
import '../construct.css';
import $ from "jquery";
import {baseUrl} from "./baseRoute";
import {generatePath} from "react-router";

export const View_maket = ({form}) =>{



    function ChartBack(background){
       // console.log("xtcyhvhbkjnlm;l")
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100% 100%";
        document.getElementById("maket").style.backgroundRepeat = "no-repeat";
    }
    function TableBack(background){
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100% 100%";
        document.getElementById("maket").style.backgroundRepeat = "no-repeat";

    }

    function openHoverFil() {
        if(document.getElementById("hoverFilter_c"))
        {
            document.getElementById("hoverFilter_c").style.width = "25%";
        }
    }
    function closeHoverFil() {
        if(document.getElementById("hoverFilter_c") )
        {
            document.getElementById("hoverFilter_c").style.width = "0%";
        }

    }
    function openHoverFilR() {
        if(document.getElementById("hoverFilter_r") )
        {
            document.getElementById("hoverFilter_r").style.width = "25%";
        }
    }
    function closeHoverFilR() {
        if(document.getElementById("hoverFilter_r") )
        {
            document.getElementById("hoverFilter_r").style.width = "0%";
        }

    }
    function openMenu() {
        if(document.getElementById("hoverMenu") )
        {
            document.getElementById("hoverMenu").style.width = "15%";
        }
    }
    function closeMenu() {
        if(document.getElementById("hoverMenu") )
        {
            document.getElementById("hoverMenu").style.width = "0%";
        }

    }
    function openMenuShort() {
        if(document.getElementById("hoverMenu_short") )
        {
            document.getElementById("hoverMenu_short").style.height = "70%";
            document.getElementById("hoverMenu_short").style.width = "5%";
        }
    }
    function closeMenuShort() {
        if(document.getElementById("hoverMenu_short") )
        {
            document.getElementById("hoverMenu_short").style.height = "0%";
            document.getElementById("hoverMenu_short").style.width = "0%";
        }

    }


    var code_menu_1_full_screen = '<div class="m_1_fs">\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>';
    var code_filter_1_full_screen = '<div class="f_1_fs h-100 w-100">\
                                        <form class="full_form_c col-12">\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter2</option> </select>\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm mb-3"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter6</option> </select>\
                                            <select class="form-select form-select-sm mb-3"> <option selected>Filter7</option> </select>\
                                            <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                             <select class="form-select form-select-sm mb-3" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                        </form>\
                                    </div>';

    var code_filter_1_full_screen_left_side = '<div class="f_1_fs_ls h-100 w-100">\
                                        <form class="full_form_c_ls col-11">\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter2</option> </select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter6</option> </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter7</option> </select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                             <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                        </form>\
                                    </div>';

    var code_kpi_1_full_screen = ' <div class="k_1_fs">\
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

    var code_kpi_2_to_short = ' <div class="col-12 px-1">\
                                <div class="row k_2_s">\
                                   <div class="col-md-2 mb-6">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center green_kpi"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-6 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi">7854 млн</div>\
                                            <div class="text-center red_kpi"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>';
    var code_kpi_3_full_screen = ' <div class="p_card3_full_s">\
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

    var code_v_3 = '<div class="box_v1">\
                            <div class="row justify-content-end">\
                                <div class="col-6 pt-2 check_button text-end px-4">\
                                    <input type="radio"\
                                            class="" name="check_button" id="chart"/>\
                                    <label class="shadow-3" id="charts" for="chart">Графики</label>\
                                    <input type="radio"\
                                            class="" name="check_button" id="table"/>\
                                    <label class="shadow-3" id="tables" for="table">Таблицы</label>\
                                </div>\
                            </div>\
                        </div>';
    var code_v_3_block = '<div class="box_v3">\
                            <div class="row justify-content-end">\
                                <div class="col-6 check_button text-end px-0">\
                                    <input type="radio"\
                                            class="" name="check_button" id="chart"/>\
                                    <label class="shadow-3" id="charts" for="chart">Графики</label>\
                                    <input type="radio"\
                                            class="" name="check_button" id="table"/>\
                                    <label class="shadow-3" id="tables" for="table">Таблицы</label>\
                                </div>\
                            </div>\
                        </div>';
    var code_v_3_micro = '<div class="box_v4">\
                            <div class="row p-0">\
                                <div class="col-12 check_button  px-0 m-0">\
                                    <input type="radio"\
                                            class="" name="check_button" id="chart"/>\
                                    <label class="shadow-3" id="charts" for="chart">Графики</label>\
                                </div>\
                                <div class="col-12 check_button p-0  m-0">\
                                    <input type="radio"\
                                            class="" name="check_button" id="table"/>\
                                    <label class="shadow-3" id="tables" for="table">Таблицы</label>\
                                </div>\
                            </div>\
                        </div>';

    var back = '<div style="position: absolute; top: 0; left: 0; height: 100%; width: 100%;"></div>'

    var code_filter_2_full = '<div class="z-filter2_2">\
                                <form class="row p-1" role="form">\
                                    <div class="col-3"><select class="form-select form-select-sm">\ <option selected>Filter1</option> </select></div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter2</option></select> </div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter3</option></select></div>\
                                    <div class="col-3"> <select class="form-select form-select-sm"><option selected>Filter4</option></select> </div>\
                                </form>\
                          </div>';

    var code_kpi_1_full_plus = ' <div class="p_card_full">\
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

    var code_kpi_1_full = ' <div class="card_full">\
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

    var code_kpi_2_full = ' <div class="row k_2_f px-0 pt-2">\
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
                                </div>';

    var code_kpi_2_full_screen = '<div class="row k_2_f_s">\
                                   <div class="col-md-2 mb-5 px-1">\
                                   <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                        <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                           <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center green_kpi2"> &#8679; +15%</div>\
                                        </div>\
                                    </div>\
                                    <div class="col-md-2 mb-5 px-1">\
                                       <div class="card">\
                                            <div class="text-center mb-0 title_kpi2">Title1</div>\
                                            <div class="text-center p-0 mb-1 num_kpi2">7854 млн</div>\
                                            <div class="text-center red_kpi2"> &#8681; -0.5%</div>\
                                        </div>\
                                    </div>\
                                </div>';

    var code_fil_3_union_m_1 = '<div class="m_1_fs row mt-2">\
                                    <div class="col-12 align-self-start p-0">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img_c" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="col-12 align-self-end mb-4 p-0" id="fil">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="img" src="/icons/Configure_w.svg" data-hover-src="/icons/Configure_l.svg"/>\
                                                <a href="#" class="nav-link textchengecolor_c text-decoration-none">Filter</a>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
                                    <form class="second_form col-11">\
                                        <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                    </form>\
                                    <a href="javascript:void(0)" id="closeHoverFil" class="col-1 px-0 closeHoverFil">\
                                    </a>\
                                </div>';

    var code_fil_3_union_m_6 = '<div class="m_6_f_3 row" style="margin-left: 5%">\
                                    <div class="col-12 align-self-start p-0">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                            </div>\
                                        </div>\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div class="col-12 align-self-end mb-4 p-0" id="fil">\
                                        <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                            <div class="d-flex align-items-center justify-content-center px-2">\
                                                <img id="imgm_c" src="/icons/Configure_w.svg" data-hover-src="/icons/Configure_l.svg"/>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
                                    <form class="second_form col-11">\
                                        <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                    </form>\
                                    <a href="javascript:void(0)" id="closeHoverFil" class="col-1 px-0 closeHoverFil">\
                                    </a>\
                                </div>';
    var code_menu_2 = '<ul class="nav justify-content-center boarder mb-0">\
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

    var code_menu_5 = '<div id="exTab3_c" class="container mb-0 mt-2">\
                                <ul class="nav nav-pills mx-0 ">\
                                    <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                    <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                    <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                </ul>\
                            </div>';

    var code_menu_3 = ' <div id="hoverMenu" style="z-index: 9">\
                    <a href="javascript:void(0)" id="closeHoverMenu" class="closebtn">&times;</a>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor_c text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-1 mx-0 mt-1 align-self-center" id="menu">\
                                <div style="width: 80%; margin-right: auto; margin-left: auto">\
                                    <img class="my-auto" id="" style="width: 40px" src="/icons/130.png"/>\
                                </div>\
                            </div>';

    var code_menu_4 = '<div id="hoverMenu_short" style="z-index: 9">\
                        <a href="javascript:void(0)" id="closeHoverMenu_short" class="closebtn">&times;</a>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant_c py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img_c" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="col-1 mx-0 mt-2 text-center" id="menu_short">\
                                <div style="width: 80%; margin-right: auto; margin-left: auto">\
                                    <img class="my-auto" id="" style="width: 30px" src="/icons/130.png"/>\
                                </div>\
                            </div>';

    var code_filter_3_menu_2 =' <div class="col-1 py-0 px-2 filter_button" id="filter_button">\
                                    <img id="logomenu_c" src="/icons/Configure_l.svg" data-hover-src="/icons/Configure_w.svg"/>\
                                </div>\
                                <ul class="nav justify-content-center boarder mb-0">\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext active" href="#">Dashboard page 1</a>\
                                    </li>\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext"  href="#">Dashboard page 2</a>\
                                    </li>\
                                    <li class="nav-item">\
                                        <a class="nav-link titletext"  href="#">Dashboard page 3</a>\
                                    </li>\
                                </ul>\
                                <div id="hoverFilter_c" class ="row hoverFilter">\
                                    <form class="second_form col-11">\
                                        <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                    </form>\
                                    <a href="javascript:void(0)" id="closeHoverFil" class="col-1 px-0 closeHoverFil">\
                                    </a>\
                                </div>';

    var code_filter_3_menu_5 =' <div id="exTab3_c" class="container row justify-content-between m-0 p-0">\
                                    <ul class="nav nav-pills col-9 mx-1 p-0 mt-4">\
                                        <li class="active"> \
                                            <a href="#1b" class="active" data-toggle="tab">Dashboard page 1</a>\
                                        </li>\
                                        <li> \
                                            <a href="#2b" data-toggle="tab">Dashboard page 2</a>  \
                                        </li>\
                                        <li>    \
                                            <a href="#3b" data-toggle="tab">Dashboard page 3</a> \
                                        </li>\
                                    </ul>\
                                    <div class="col-2 mx-0">\
                                            <div id="filter_button" style="width: 80%; margin-right: 0; margin-left: auto" class="text-center" onmouseleave="this.children[0].src=\'/icons/Configure_l.svg\'" onmouseover="this.children[0].src=\'/icons/Configure_w.svg\'">\
                                                <img class="my-auto" id="" style="width: 20px" src="/icons/Configure_l.svg"/>\
                                                <span>Filter</spanstyle>\
                                            </div>\
                                    </div>\
                                </div>\
                                <div id="hoverFilter_r" class ="row hoverFilter">\
                                    <a href="javascript:void(0)" id="closeHoverFilR" class="col-2 mx-2 px-0 closeHoverFil">\
                                    </a>\
                                    <form class="second_form col-10">\
                                        <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                    </form>\
                                 </div>';

    var code_menu_6 = ' <div class="d-flex flex-column bd-highlight nav1">\
                                <div class="nav-item hovervariant py-3 mt-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="/icons/Layout.svg" data-hover-src="/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="/icons/Chip.svg" data-hover-src="/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="/icons/Cart.svg" data-hover-src="/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="/icons/Bag.svg" data-hover-src="/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="/icons/Map.svg" data-hover-src="/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                            </div>';
     var code_filter_3_right = '<div class="col-1 py-1 other_filter_button" id="filter_button">\
                                    <img id="logomenu_c" width="25px" src="/icons/Configure_l.svg"/>\
                                </div>\
                                <div id="hoverFilter_r" class ="row hoverFilter">\
                                    <a href="javascript:void(0)" id="closeHoverFilR" class="col-2 mx-2 px-0 closeHoverFil">\
                                    </a>\
                                    <form class="second_form col-10">\
                                        <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                        <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                        <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                            <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                        </select>\
                                        <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                    </form>\
                                 </div>';

    var code_filter_3 =     '<div id="filter_button" class="text-center" style="width: 80%; margin-right: 10px; margin-left: auto" onmouseleave="this.children[0].src=\'/icons/Configure_l.svg\'" onmouseover="this.children[0].src=\'/icons/Configure_w.svg\'">\
                                    <img class="my-auto" id="" style="width: 20px" src="/icons/Configure_l.svg"/>\
                                    <span>Filter</spanstyle>\
                             </div>\
                            <div id="hoverFilter_r" class ="row hoverFilter">\
                                <a href="javascript:void(0)" id="closeHoverFilR" class="col-2 mx-2 px-0 closeHoverFil">\
                                </a>\
                                <form class="second_form col-10">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"> <option selected>Filter6</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm"><option selected>Filter8</option></select>\
                                </form>\
                             </div>';

    var code_filter_1_full_plus = '<div class="full_form d-flex h-100 w-100">\
                                        <form class="col-12 px-2">\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter2</option> </select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter6</option> </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter7</option> </select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                             <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                        </form>\
                                    </div>';
    var code_filter_1_full_plus_without_back = '<div class="full_form_w d-flex h-100 w-100">\
                                        <form class="col-12">\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter1</option></select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter2</option> </select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter3</option></select>\
                                            <select class="form-select form-select-sm mb-2"><option selected>Filter4</option></select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter5</option><option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter6</option> </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter7</option> </select>\
                                            <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter8</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                             <select class="form-select form-select-sm mb-2" size="4" aria-label="size 3 select example">\
                                                <option selected>Filter9</option> <option value="1">One</option>\ <option value="2">Two</option> <option value="3">Three</option>\
                                            </select>\
                                            <select class="form-select form-select-sm mb-2"> <option selected>Filter10</option> </select>\
                                        </form>\
                                    </div>';

    function makeBackground(url){
        let background = document.createElement("img");
        background.src = baseUrl+url;
        background.classList.add('px-0');
        background.style.position = "absolute";
        background.style.top = "0";
        background.style.left = "0";
        background.style.height = "100%";
        background.style.width = "100%";
        background.style.zIndex = "0";
        return background;
    }

    function makeDiv(classlist){
        let div = document.createElement("div");
        classlist.forEach(e => {div.classList.add(e);});
        return div;
    }


    function Make(mm, ff, kk, vv, n) {
        var board = document.getElementById('maket');
        if (board) {
            while (board.firstChild) {
                board.removeChild(board.firstChild);
            }
            board.classList.add('row');
            board.classList.add('position-relative');

            var m = Number(mm);
            var f = Number(ff);
            var k = Number(kk);
            var v = Number(vv);


            var other_place_10 = makeDiv(['col-10', 'p-0', 'row']);
            var other_place_12 = makeDiv(['col-12', 'row', 'p-0', 'm-0']);
            other_place_12.style.height = "87%";
            var other_place_11 = makeDiv(['col-11', 'p-0', 'row', 'm-0']);
            other_place_11.style.height = "100%";

            var for_other_columns = makeDiv(['col-12', 'p-0', 'row', 'm-0']);

            var title = makeDiv(['row', 'm-0', 'p-0']);
            title.style.height = "35px";


            if (m === 1)
            {
                let menu1 = makeDiv(['col-2', 'h-100']);
                menu1.innerHTML = code_menu_1_full_screen;
                menu1.style.zIndex = "3";
                board.appendChild(menu1);
                board.appendChild(other_place_10);
                other_place_10.style.zIndex = "2";
                if (f === 1)
                {
                    let filter1 = makeDiv(['col-2', 'p-2']);
                    filter1.innerHTML = code_filter_1_full_screen;
                    other_place_10.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'h-100']);
                        kpi1.innerHTML = code_kpi_1_full_screen;
                        kpi1.style.paddingRight = "2.5%";
                        kpi1.style.paddingLeft = "1%";
                        kpi1.style.marginTop = "1%";
                        kpi1.style.zIndex = '4';
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 84.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 96.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = document.createElement("div");
                            v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3;
                            other_place_10.insertBefore(v3, other_place_10.firstChild);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 84.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 96.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                TableBack("url('/backs/Frame 84.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        other_place_10.removeChild(filter1);
                        let filter1_n = makeDiv(['col-2', 'p-2']);
                        filter1_n.innerHTML = code_filter_1_full_plus_without_back;
                        other_place_10.appendChild(kpi2);
                        other_place_10.appendChild(filter1_n);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 83.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 82.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = document.createElement("div");
                            v3.classList.add('col-10');
                            v3.innerHTML = code_v_3_block;
                            v3.style.height = '40px';
                            other_place_10.appendChild(v3);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 82.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 82.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 83.png')")
                                }
                            )

                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3', 'h-100', 'p-0']);
                        kpi3.innerHTML = code_kpi_3_full_screen;
                        other_place_10.appendChild(kpi3);
                        other_place_10.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 95.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 81.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = document.createElement("div");
                            v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3;
                            v3.childNodes[0].style.paddingRight ="22%";
                            other_place_10.insertBefore(v3, other_place_10.firstChild);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 81.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 81.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 95.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 2)
                {
                    let fil2 = makeDiv(['col-12', 'px-1']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    other_place_10.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "5%";
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 78.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 86.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = document.createElement("div");
                            v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3;
                            v3.childNodes[0].style.paddingTop = "40px";
                            other_place_10.insertBefore(v3, other_place_10.firstChild);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 78.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 86.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 78.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        fil2.classList.add('mt-2');
                        other_place_10.style.display = "block";
                        other_place_10.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = document.createElement("div");
                            v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3_block;
                            // v3.childNodes[0].style.paddingTop = "40px";
                            other_place_10.appendChild(v3);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 92.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 92.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 89.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "1.5%";
                        kpi3.style.paddingLeft = "4%";
                        other_place_10.appendChild(kpi3);
                        fil2.classList.add('mt-2');
                        other_place_10.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 87.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2)
                        {
                            let ground = makeBackground('/backs/Frame 79.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v===3)
                        {
                            let v3 = makeDiv(['col-9', 'px-0'])
                            // v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3_block;
                            other_place_10.insertBefore(v3, kpi3);
                            other_place_10.classList.remove('justify-content-end');
                            // other_place_10.style.display = 'block';
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 87.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 79.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 87.png')")
                                }
                            )

                        }
                    }
                }
                else if (f === 3) {
                    let fil3 = makeDiv(['col-2', 'h-100']);
                    fil3.innerHTML = code_fil_3_union_m_1;
                    fil3.style.zIndex = "3";
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("fil").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_screen;
                        kpi1.style.paddingRight = "1.5%";
                        kpi1.style.paddingLeft = "1%";
                        kpi1.style.marginTop = "1%";
                        other_place_10.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 88.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 80.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-9', 'px-0'])
                            // v3.classList.add('position-relative');
                            v3.innerHTML = code_v_3_block;
                            other_place_10.insertBefore(v3, kpi1);
                            other_place_10.classList.remove('justify-content-end');
                            // other_place_10.style.display = 'block';
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 88.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 80.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 88.png')")
                                }
                            )

                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        other_place_10.style.display = "block";
                        other_place_10.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 90.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 93.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-12', 'px-3', 'mt-2'])
                            v3.innerHTML = code_v_3_block;
                            other_place_10.insertBefore(v3, kpi2);
                            other_place_10.classList.remove('justify-content-end');
                            // other_place_10.style.display = 'block';
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 90.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 93.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 90.png')")
                                }
                            )

                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_screen;
                        kpi3.style.paddingLeft = "4%";
                        kpi3.style.marginTop = "1%";
                        other_place_10.appendChild(kpi3);
                        other_place_10.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 98.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 97.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-9', 'px-0'])
                            v3.innerHTML = code_v_3_block;
                            other_place_10.insertBefore(v3, kpi3);
                            other_place_10.classList.remove('justify-content-end');
                            v3.style.marginTop = "1%";
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 97.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";
                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 97.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 98.png')")
                                }
                            )
                        }
                    }
                }
            }
            else if (m === 2)
            {
                let menux = makeDiv(['col-12', 'row', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_2;
                menux.style.zIndex = "3";
                board.appendChild(menux);
                board.appendChild(other_place_12);
                other_place_12.style.zIndex = "2";
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 118.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 117.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if(v===3) {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 117.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";
                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 118.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 117.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {

                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            // other_place_12.classList.remove('justify-content-end');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 92.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 92.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 89.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 119.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 120.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            filter1.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 119.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 119.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 120.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 2)
                {
                    let fil2 = makeDiv(['col-12', 'px-0']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 99.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 99.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 107.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 135.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 136.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 135.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 136.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 135.png')")
                                }
                            )
                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 100.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 100.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 108.png')")
                                }
                            )
                        }
                    }

                }
                else if (f === 3)
                {
                    let fil3 = makeDiv(['col-12', 'p-0', 'm-0']);
                    fil3.innerHTML = code_filter_3_menu_2;
                    fil3.style.zIndex = "3";
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("filter_button").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingRight = "6%";
                        kpi1.style.paddingLeft = "0.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 109.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 101.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 109.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 101.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 109.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 138.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 137.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 138.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 138.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 137.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "6%";
                        kpi3.style.paddingRight = "0%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 122.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 121.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 121.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 121.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 122.png')")
                                }
                            )
                        }
                    }

                }
            }
            else if (m === 5)
            {
                let menux = makeDiv(['col-12', 'row', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_5;
                menux.style.zIndex = "3";
                board.appendChild(menux);
                board.appendChild(other_place_12);
                other_place_12.style.zIndex = "2";
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 118.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 117.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if(v===3) {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 117.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";
                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 118.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 117.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 89.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 92.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {

                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            // other_place_12.classList.remove('justify-content-end');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 92.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 92.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 89.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 119.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 120.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            filter1.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 119.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 119.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 120.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 2)
                {
                    let fil2 = makeDiv(['col-12', 'px-0']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 107.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 99.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 99.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 99.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 107.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 135.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 136.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 135.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 136.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 135.png')")
                                }
                            )
                        }

                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "5.5%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 108.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 100.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.appendChild(v3);
                            menux.childNodes[0].classList.add('col-11');
                            menux.classList.add('justify-content-between')
                            fil2.classList.remove('mt-1');
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 100.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 100.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 108.png')")
                                }
                            )
                        }
                    }

                }
                else if (f === 3)
                {
                    let fil3 = makeDiv(['col-12', 'p-0', 'm-0']);
                    fil3.innerHTML = code_filter_3_menu_5;
                    fil3.style.zIndex = "3";
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("filter_button").addEventListener("click", openHoverFilR);
                    document.getElementById("closeHoverFilR").addEventListener("click", closeHoverFilR);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingRight = "6%";
                        kpi1.style.paddingLeft = "0.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 109.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 101.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 109.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 101.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 109.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 138.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 137.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 138.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 138.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 137.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "6%";
                        kpi3.style.paddingRight = "0%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 122.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 121.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            fil3.classList.remove('col-12');
                            fil3.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            fil3.classList.add('justify-content-between')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 121.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 121.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 122.png')")
                                }
                            )
                        }
                    }

                }
            }
            else if (m === 3)
            {
                let menux = makeDiv(['col-12', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_3;
                menux.style.zIndex = "4";
                menux.style.height = '40px';
                board.appendChild(menux);
                board.classList.add('align-items-start');
                board.appendChild(other_place_12);
                document.getElementById("menu").addEventListener("click", openMenu);
                document.getElementById("closeHoverMenu").addEventListener("click", closeMenu);
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0', 'mt-1']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    filter1.style.zIndex = "2";

                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        kpi1.style.zIndex = "2";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 128.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 123.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 123.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 123.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 128.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2)
                    {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 139.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 140.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 140.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 140.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 139.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 129.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 130.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 130.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 130.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 129.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 2) {
                    let fil2 = makeDiv(['col-12', 'p-0', 'm-0']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    fil2.style.zIndex = "2";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 131.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 124.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 124.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 124.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 131.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12', 'm-0']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 141.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 142.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 141.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 142.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 141.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "7%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 144.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 143.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 143.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 143.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 144.png')")
                                }
                            )
                        }
                    }

                }
                else if (f === 3) {
                    menux.classList.remove('col-12');
                    menux.classList.add('col-10');
                    let fil3 = makeDiv(['m-0','col-2', 'p-0', 'nice_filter_button']);
                    fil3.innerHTML = code_filter_3;
                    fil3.style.height = '40px';
                    fil3.style.zIndex = '4';
                    board.insertBefore(fil3, other_place_12);
                    document.getElementById("filter_button").addEventListener("click", openHoverFilR);
                    document.getElementById("closeHoverFilR").addEventListener("click", closeHoverFilR);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0.5%";
                        kpi1.style.paddingRight = "6.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 133.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 126.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 126.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 126.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 133.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 147.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 148.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 148.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 148.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 147.png')")
                                }
                            )
                        }

                    } else if (k === 3)
                    {
                        let kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "7%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 134.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 127.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 127.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 127.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 134.png')")
                                }
                            )
                        }
                    }
                }


            }
            else if(m === 4)
            {
                let menux = makeDiv(['col-12', 'p-0', 'm-0']);
                menux.innerHTML = code_menu_4;
                menux.style.zIndex = "4";
                menux.style.height = '40px';
                board.appendChild(menux);
                board.classList.add('align-items-start');
                board.appendChild(other_place_12);
                document.getElementById("menu_short").addEventListener("click", openMenuShort);
                document.getElementById("closeHoverMenu_short").addEventListener("click", closeMenuShort);
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0', 'mt-1']);
                    filter1.innerHTML = code_filter_1_full_plus;
                    other_place_12.appendChild(filter1);
                    filter1.style.zIndex = "2";

                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-1']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        kpi1.style.zIndex = "2";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 128.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 123.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 123.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 123.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 128.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2)
                    {
                        let kpi2 = makeDiv(['col-10']);
                        kpi2.innerHTML = code_kpi_2_full;
                        kpi2.style.paddingLeft = "3%";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 139.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 140.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 140.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 140.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 139.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.style.paddingLeft = "8.5%";
                        kpi3.style.paddingRight = "0";
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 129.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 130.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 130.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 130.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 129.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 2) {
                    let fil2 = makeDiv(['col-12', 'px-0']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    fil2.style.zIndex = "2";
                    other_place_12.appendChild(fil2);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0%";
                        kpi1.style.paddingRight = "7%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 131.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 124.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 124.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 124.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 131.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-12', 'm-0']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 141.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 142.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 141.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 142.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 141.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "7%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 144.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 143.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-12');
                            menux.classList.add('col-11');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 143.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 143.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 144.png')")
                                }
                            )
                        }
                    }
                }
                else if (f === 3) {
                    menux.classList.remove('col-12');
                    menux.classList.add('col-10');
                    let fil3 = makeDiv(['m-0','col-2', 'p-0', 'nice_filter_button']);
                    fil3.innerHTML = code_filter_3;
                    fil3.style.height = '40px';
                    fil3.style.zIndex = '4';
                    board.insertBefore(fil3, other_place_12);
                    document.getElementById("filter_button").addEventListener("click", openHoverFilR);
                    document.getElementById("closeHoverFilR").addEventListener("click", closeHoverFilR);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0.5%";
                        kpi1.style.paddingRight = "6.5%";
                        other_place_12.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 133.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 126.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 126.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 126.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 133.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2)
                    {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full_screen;
                        other_place_12.style.display = "block";
                        other_place_12.appendChild(kpi2);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 147.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 148.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 148.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 148.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 147.png')")
                                }
                            )
                        }

                    }
                    else if (k === 3)
                    {
                        let kpi3 = makeDiv(['col-3', 'mt-1']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingRight = "0%";
                        kpi3.style.paddingLeft = "7%";
                        other_place_12.appendChild(kpi3);
                        other_place_12.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 134.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 127.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            menux.classList.remove('col-10');
                            menux.classList.add('col-9');
                            board.insertBefore(v3, other_place_12);
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 127.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 127.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 134.png')")
                                }
                            )
                        }
                    }
                }


            }
            else if (m === 6)
            {
                let menu6 = makeDiv(['col-1', 'p-0', 'm-0', 'h-100']);
                menu6.innerHTML = code_menu_6;
                menu6.style.zIndex = "3";
                board.appendChild(menu6);
                board.appendChild(other_place_11);
                other_place_11.style.zIndex = "2";
                other_place_11.appendChild(title);
                other_place_11.appendChild(for_other_columns);
                for_other_columns.style.zIndex = '2';
                if (f === 1) {
                    let filter1 = makeDiv(['col-2', 'p-0']);
                    filter1.innerHTML = code_filter_1_full_plus_without_back;
                    filter1.style.height = "95%";
                    for_other_columns.appendChild(filter1);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "1.5%";
                        kpi1.style.paddingRight = "7%";
                        for_other_columns.appendChild(kpi1);
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 53.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 54.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 54.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 54.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 53.png')")
                                }
                            )
                        }
                    }
                    else if (k === 2) {
                        let kpi2 = makeDiv(['col-10', 'm-0']);
                        kpi2.innerHTML = code_kpi_2_to_short;
                        for_other_columns.appendChild(kpi2);
                        for_other_columns.classList.add('mt-2');
                        other_place_11.style.display = 'block';
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 59.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 58.png');
                            board.insertBefore(ground, board.firstChild);
                        }
                        else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 58.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 58.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 59.png')")
                                }
                            )
                        }
                    }
                    else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "5%";
                        kpi3.style.paddingRight = "0%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-between');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 61.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 63.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 63.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 63.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 61.png')")
                                }
                            )
                        }
                    }
                } else if (f === 2) {
                    let fil2 = makeDiv(['col-12', 'p-0', 'mx-0', 'mt-2']);
                    fil2.innerHTML = code_filter_2_full;
                    fil2.style.height = "35px";
                    for_other_columns.appendChild(fil2);
                    other_place_11.style.display = "block";
                    //for_other_columns.style.display = "block";
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-2']);
                        kpi1.innerHTML = code_kpi_1_full;
                        kpi1.style.paddingLeft = "0";
                        kpi1.style.paddingRight = "5.5%";
                        for_other_columns.appendChild(kpi1);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 56.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 55.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 55.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 55.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 56.png')")
                                }
                            )
                        }
                    } else if (k === 2)
                    {
                        let kpi2 = makeDiv(['col-12']);
                        kpi2.innerHTML = code_kpi_2_full;
                        for_other_columns.appendChild(kpi2);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 64.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 65.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 65.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 65.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 64.png')")
                                }
                            )
                        }
                    }
                    else if (k === 3)
                    {
                        let kpi3 = makeDiv(['col-3', 'mt-2']);
                        kpi3.innerHTML = code_kpi_1_full;
                        kpi3.style.paddingLeft = "5%";
                        kpi3.style.paddingRight = "0.5%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 66.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 67.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 66.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 66.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 67.png')")
                                }
                            )
                        }

                    }
                }
                else if (f === 3) {
                    let fil3 = makeDiv(['col-1', 'p-0', 'm-0']);
                    fil3.innerHTML = code_fil_3_union_m_6;
                    fil3.style.zIndex = '3';
                    board.removeChild(board.firstChild);
                    board.insertBefore(fil3, board.firstChild);
                    document.getElementById("fil").addEventListener("click", openHoverFil);
                    document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
                    if (k === 1) {
                        let kpi1 = makeDiv(['col-3', 'mt-2']);
                        kpi1.innerHTML = code_kpi_1_full_plus;
                        kpi1.style.paddingLeft = "0";
                        kpi1.style.paddingRight = "5.5%";
                        for_other_columns.appendChild(kpi1);
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 69.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 68.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 68.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 68.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 69.png')")
                                }
                            )

                        }
                    } else if (k === 2) {
                        let kpi2 = makeDiv(['col-12', 'mt-2']);
                        kpi2.innerHTML = code_kpi_2_full;
                        for_other_columns.appendChild(kpi2);
                        other_place_11.style.display = 'block';
                        for_other_columns.style.display = "block";
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 73.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 72.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 72.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 72.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 73.png')")
                                }
                            )


                        }
                    } else if (k === 3) {
                        let kpi3 = makeDiv(['col-3']);
                        kpi3.innerHTML = code_kpi_1_full_plus;
                        kpi3.style.paddingLeft = "5%";
                        kpi3.style.paddingRight = "0.5%";
                        for_other_columns.appendChild(kpi3);
                        for_other_columns.classList.add('justify-content-end');
                        if (v === 1) {
                            let ground = makeBackground('/backs/Frame 74.png');
                            board.insertBefore(ground, board.firstChild);
                        } else if (v === 2) {
                            let ground = makeBackground('/backs/Frame 75.png');
                            board.insertBefore(ground, board.firstChild);
                        } else {
                            let v3 = makeDiv(['col-1', 'px-0'])
                            v3.innerHTML = code_v_3_micro;
                            v3.style.height = '40px';
                            title.appendChild(v3);
                            title.classList.add('justify-content-end')
                            document.getElementById("maket").style.backgroundImage = "url('/backs/Frame 75.png')";
                            document.getElementById("maket").style.backgroundSize = "100%";
                            document.getElementById("maket").style.backgroundRepeat = "no-repeat";

                            document.getElementById("charts").addEventListener("click", (e)=>{
                                    ChartBack("url('/backs/Frame 75.png')")
                                }
                            )
                            document.getElementById("tables").addEventListener("click", (e)=>{
                                    TableBack("url('/backs/Frame 74.png')")
                                }
                            )
                        }

                    }
                }
            }
        }

    }



    function Generate()
    {
        // var arr = [];
        // var menu = [1,2,3,4,5,6];
        // var filter = [1,];
        // var kpi = [1,];
        // var visual = [1];
        // for (let i = 0; i < menu.length; i++) {
        //     for (let k = 0; k < filter.length; k++){
        //         for (let m = 0; m < kpi.length; m++) {
        //             for (let n = 0; n < visual.length; n++){
        //                 arr.push([menu[i], filter[k], kpi[m], visual[n]]);
        //             }
        //         }
        //     }
        // }
        //console.log(arr);
        //return arr;
        // for(let a = 0; a <arr.length; a++ ){
        //     if(a <= 10){
        //         //lol(arr[a][0], arr[a][1], arr[a][2], arr[a][3], a);
        //     }
        //
        // }
         Make(6, 3, 3, 3, 1);
    }


$(document).ready(
    function (){

        if(form) {
              //Generate();
             Make(form.menu_id, form.filter_id, form.kpi_id, form.visual_id);
        }
    })

    return (
        <>
            {/*<fieldset style={{backgroundColor: 'white'}} className="generate">*/}
            {/*    <div className="row container-fluid w-100 p-0 m-0">*/}
            {/*        <div className="col-12 mt-4">*/}
            {/*            <div className="row justify-content-center">*/}
            {/*                <div className="col-8" style={{marginRight:'20px'}}>*/}
            {/*                    <div className="maket" id="maket">*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="col-3">*/}
            {/*                    <form>*/}
            {/*                        <h5 className="pt-0 pb-2">Комментарии к отчету</h5>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control form-control-sm" id="floatingInput"/>*/}
            {/*                            <label htmlFor="floatingInput">Email address</label>*/}
            {/*                        </div>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control" id="floatingInput" />*/}
            {/*                            <label htmlFor="floatingInput">Заказчик</label>*/}
            {/*                        </div>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control" id="floatingInput" />*/}
            {/*                            <label htmlFor="floatingInput">Проектный менеджер</label>*/}
            {/*                        </div>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control" id="floatingInput" />*/}
            {/*                            <label htmlFor="floatingInput">Исполнитель</label>*/}
            {/*                        </div>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control" id="floatingInput" />*/}
            {/*                            <label htmlFor="floatingInput">Компания</label>*/}
            {/*                        </div>*/}
            {/*                        <div className="form-floating mb-2">*/}
            {/*                            <input type="email" className="form-control" id="floatingInput" />*/}
            {/*                            <label htmlFor="floatingInput">Прогнозируемая цена</label>*/}
            {/*                        </div>*/}
            {/*                    </form>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</fieldset>*/}
        </>
    )
}
