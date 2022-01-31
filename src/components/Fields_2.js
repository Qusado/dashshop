import React, {useCallback, useContext, useEffect, useState} from 'react'
import $ from "jquery";
import {AuthContext} from "../context/Auth.Context";
import {useHttp} from "../hooks/http.hook";
import {Menu} from "./constructor/menu";
import {Filter} from "./constructor/filter";
import {KPI} from "./constructor/kpi";
import {Report} from "./constructor/report";
import {Lay} from "./constructor/lay.js";
import {Visual_part} from "./constructor/visual_part";

export const Fields_2 = () => {

    const {userId, token} = useContext(AuthContext)
    const {request, loading, error, clearError} = useHttp()

    const [form, setForm] = useState({
        menu_id: '', filter_id: '', kpi_id: '', visual_id:'', report_id:'', g1:'', g1_title:'', g2:'', g2_title:'', g3:'', g3_title:'', g4:'', g4_title:'', g5:'', g5_title:'', g6:'', g6_title:'',
    });
    const [createMaket, setCreateMaket] = useState(false);

    // function openNav2() {
    //     if(document.getElementById("mySidenav2") && document.getElementById("mask")  )
    //     {
    //         document.getElementById("mySidenav2").style.height = "55%";
    //         // document.getElementById("mask").style.backgroundColor = "rgba(0,0,0)";
    //     }
    // }
    // function closeNav2() {
    //     if(document.getElementById("mySidenav2") )
    //     {
    //         document.getElementById("mySidenav2").style.height = "0";
    //     }
    //
    // }

    // function openNav() {
    //     if(document.getElementById("mySidenav") && document.getElementById("mask")  )
    //     {
    //         document.getElementById("mySidenav").style.width = "20%";
    //         // document.getElementById("mask").style.backgroundColor = "rgba(0,0,0)";
    //     }
    // }
    // function closeNav() {
    //     if(document.getElementById("mySidenav") )
    //     {
    //         document.getElementById("mySidenav").style.width = "0";
    //     }
    //
    // }



    // const addLayouthandler = async () => {
    //     try {
    //          const data = await request('/api/layout/', 'POST', {...form}, {
    //              Authorization : `Bearer ${token}`
    //          })
    //          await makeLayout(data);
    //         createHoverImage();
    //     } catch (e) {}
    // }


    // function openFloatFil() {
    //     if(document.getElementById("FloatFilter") )
    //     {
    //         document.getElementById("FloatFilter").style.width = "30%";
    //     }
    // }
    // function closeFloatFil() {
    //     if(document.getElementById("FloatFilter") )
    //     {
    //         document.getElementById("FloatFilter").style.width = "0";
    //     }
    //
    // }




    $(document).ready(function(){

        var current_fs, next_fs, previous_fs;
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        $(".next").click(function(){
            current_fs = $(this).parent().parent().parent();
            next_fs = $(this).parent().parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                    opacity = 1 - now;
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    next_fs.css({'opacity': opacity});
                },
                duration: 500
            });
        });
        $(".previous").click(function(){
            current_fs = $(this).parent().parent().parent();
            previous_fs = $(this).parent().parent().parent().prev();
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            previous_fs.show();
            current_fs.animate({opacity: 0}, {
                step: function(now) {
                    opacity = 1 - now;
                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({'opacity': opacity});
                },
                duration: 500
            });
        });
    });


    return(
        <div className="form mx-0 w-100">
            <form id="msform">
                <Menu form={form}/>
                <Filter form={form}/>
                <KPI form={form}/>
                <Report form={form}/>
                <Visual_part form={form} setCreateMaket={setCreateMaket}/>
                <Lay form={form} createMaket={createMaket}/>
                <ul id="progressbar" className="fixed-bottom">
                    <li className="active" id="menu"><h6>Меню</h6></li>
                    <li id="filter"><h6>Фильтр</h6></li>
                    <li id="kpi"><h6>Показатели</h6></li>
                    <li id="graph"><h6>Графики</h6></li>
                    <li id="visual"><h6>Визуализация</h6></li>
                    <li id="confirm"><h6><i className="fas fa-border-all"></i> Макет</h6></li>
                </ul>
            </form>
        </div>
    );
}
