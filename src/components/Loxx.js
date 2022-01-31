import React, {useContext} from 'react'
import {Link, useHistory} from "react-router-dom";
import $ from "jquery";

export const Loxx = ({menus, filters, kpis, visuals}) => {


    $(document).ready(function(){

        var current_fs, next_fs, previous_fs;
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;

        setProgressBar(current);

        $(".next").click(function(){

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

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

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

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
        $("[name=toggler]").click(function(){
            $('.toHide').hide();
            $("#blk-"+$(this).val()).show();
        });
    });

    $(document).ready(function() {
        $('.praongallery').each(function(a) {
            $(this).find('.praon28 img').attr(
                {'src': $(this).find('.praon30:eq(0) img').attr('src'), "datahomesliders": '0'}
            );
        });
        $('.praongallery .praon39next').click(function() {
            var nowimg = parseInt($(this).closest('.praongallery').find('.praon28 img').attr('datahomesliders')) + 1;
            if(!$(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').length > 0) {nowimg = 0; }
            $(this).closest('.praongallery').find('.praon28 img').attr(
                {'src': $(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').find('img').attr('src'), "datahomesliders": nowimg}
            );
        });
        $('.praongallery .praon38prev').click(function() {
            var nowimg = parseInt($(this).closest('.praongallery').find('.praon28 img').attr('datahomesliders')) - 1;
            if(nowimg < 0) {nowimg = parseInt($(this).closest('.praongallery').find('.praon30').length) - 1; }
            $(this).closest('.praongallery').find('.praon28 img').attr(
                {'src': $(this).closest('.praongallery').find('.praon30:eq(' + nowimg + ')').find('img').attr('src'), "datahomesliders": nowimg}
            ); });
        $('.praongallery .praon30').click(function() {
            $(this).closest('.praongallery').find('.praon28 img').attr(
                {'src': $(this).find('img').attr('src'), "datahomesliders": $(this).index()}
            );
        });
    });


        return(

            <div className="container-fluid">

                <div className="row">
                    <div className="col-12 text-center p-0 mt-0 mb-0">
                        <div className="px-0 pt-1 pb-0 mt-1 mb-0">
                            <form id="msform">


                                    <fieldset>


                                        {/*<div className="form-card">*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-12">*/}
                                        {/*            <h2 className="fs-title">Меню дашборда:</h2>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}


                                        {/*    <div className="row h-auto lox2">*/}

                                                {/*{ menus && menus.map((menu, index) => {*/}
                                                {/*    return(*/}
                                                {/*        <div className="col-md-4 mb-3">*/}
                                                {/*            <Link to={`/menu/${menu.id_constructor_menu}`}>*/}
                                                {/*                /!*<div className="card">*!/*/}
                                                {/*                    /!*<img src={`/images/miniVersion/${menus.layout_img}`}/>*!/*/}
                                                {/*                /!*</div>*!/*/}
                                                {/*                <ViewMenu menu={menu}/>*/}
                                                {/*            </Link>*/}
                                                {/*        </div>*/}
                                                {/*    );})}*/}
                                        {/*    </div>*/}



                                        <div className="praongallery row mx-0">
                                            <div className="praon22span7 col-10">
                                                <div className="praon38prev"/>
                                                <div className="praon28"><img src="../images/miniVersion/3.png" alt=""/></div>
                                                <div className="praon39next"/>
                                            </div>
                                            <div className="praon23span5 col-2">
                                                <div className="praon29">
                                                    <div className="praon30"><img src="../images/miniVersion/4.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/8.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/6.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/11.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/1.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/2.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/9.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/7.png"/></div>
                                                    <div className="praon30"><img src="../images/miniVersion/5.png"/></div>
                                                </div>
                                            </div>
                                        </div>





















                                        {/*<input type="button" name="next" className="next action-button" value="Next"/>*/}
                                    </fieldset>





                                    <fieldset>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="fs-title">Фильтр дашборда:</h2>
                                                </div>
                                            </div>

                                            <div className="row h-auto lox2">
                                                {filters && filters.map((filter, index) => {
                                                    return(
                                                        <div className="col-md-4 mb-3">
                                                            <Link to={`/filter/${filter.id_constructor_filter}`}>
                                                                <div className="card">
                                                                    <img src={`/images/miniVersion/${filter.layout_img}`}/>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    );})}
                                            </div>





                                        </div>



                                        <input type="button" name="next" className="next action-button" value="Next"/>
                                        <input type="button" name="previous" className="previous action-button-previous"
                                               value="Previous"/>
                                    </fieldset>




                                    <fieldset>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="fs-title">Показатели дашборда:</h2>
                                                </div>

                                                <div className="row h-auto lox2">
                                                    {kpis && kpis.map((kpi, index) => {
                                                        return(
                                                            <div className="col-md-4 mb-3">
                                                                <Link to={`/kpi/${kpi.id_constructor_kpi}`}>
                                                                    <div className="card">
                                                                        <img src={`/images/miniVersion/${kpi.layout_img}`}/>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        );})}


                                                </div>




                                            </div>
                                        </div>




                                        <input type="button" name="next" className="next action-button" value="Submit"/>
                                        <input type="button" name="previous" className="previous action-button-previous"
                                               value="Previous"/>
                                    </fieldset>



                                    <fieldset>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="fs-title">Визуализация данных:</h2>
                                                </div>
                                            <div className="row h-auto lox2">
                                                <div className="theme_label col-6">

                                                    { visuals && visuals.map((visual, index) => {
                                                        return(
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="toggler" id={`rdb-${visual.id_constructor_visual}`}
                                                                       value={`${visual.id_constructor_visual}`}/>
                                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                                    {visual.title}
                                                                </label>
                                                            </div>
                                                        );})}


                                                    <input type="button" name="next" className="next action-button" value="Submit"/>
                                                    <input type="button" name="previous" className="previous action-button-previous"
                                                           value="Previous"/>

                                                </div>

                                                <div className="col-6">
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
                                            </div>

                                        </div>

                                        <input type="button" name="next" className="next action-button" value="Submit"/>
                                        <input type="button" name="previous" className="previous action-button-previous"
                                               value="Previous"/>
                                    </fieldset>

                                <fieldset>
                                    <div className="form-card">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="fs-title">Ваш дашборд свормирован</h2>
                                            </div>
                                            <div className="row h-auto lox2">
                                                <div className="theme_label col-12">



                                                    <input type="button" name="next" className="next action-button" value="Экспортировать"/>
                                                    <input type="button" name="previous" className="previous action-button-previous"
                                                           value="Сохранить"/>

                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                </fieldset>

                                <ul className="fixed-bottom" id="progressbar">
                                    <li className="active" id="account"><strong>Menu</strong></li>
                                    <li id="personal"><strong>Filter</strong></li>
                                    <li id="payment"><strong>KPI</strong></li>
                                    <li id="confirm"><strong>Visual</strong></li>
                                    <li id="confirm"><strong>Finish</strong></li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

)
}


