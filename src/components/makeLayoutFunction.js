import React from "react";

export const makeLayoutFunction = ()=>{


    function createHoverImage() {
        document.querySelectorAll('[data-hover-src]').forEach((img) => {
            const src = img.getAttribute('src');
            const srcH = img.getAttribute('data-hover-src');
            img.parentElement.parentElement.addEventListener('mouseover', () => {img.src = srcH;})
            img.parentElement.parentElement.addEventListener('mouseout', () => {img.src = src;})
        });
    }

    createHoverImage();

    function openFil() {

        if(document.getElementById("SideFilt") )
        {
            document.getElementById("SideFilt").style.width = "250%";
        }
    }
    function closeFil() {
        if(document.getElementById("SideFilt") )
        {
            document.getElementById("SideFilt").style.width = "0";
        }

    }
    function openHoverFil() {
        if(document.getElementById("hoverFilter") )
        {
            document.getElementById("hoverFilter").style.width = "100%";
        }
    }
    function closeHoverFil() {
        if(document.getElementById("hoverFilter") )
        {
            document.getElementById("hoverFilter").style.width = "0";
        }

    }

    function ChartBack(background){
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100%";
    }
    function TableBack(background){
        document.getElementById("maket").style.backgroundImage = background;
        document.getElementById("maket").style.backgroundSize = "100%";
    }

    const Make =()=>{
        var m = Number(data.menu_id);
    var f = Number(data.filter_id);
    var k = Number(data.kpi_id);
    var v = Number(data.visual_id);

    var code_menu_2 = ' <div class="d-flex flex-column bd-highlight nav1">\
                                <div class="nav-item hovervariant py-3 mt-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                            </div>';
    var code_menu_3 = ' <div class="d-flex flex-column bd-highlight nav2">\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-2" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="img" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                        <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                    </div>\
                                </div>\
                            </div>';
    var code_union_menu_3_f3 =' <div class="bd-highlight nav2">\
                                        <div id="menu">\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Page1</a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                        <div id="fil">\
                                            <div class="nav-item hovervariant py-2" id="hovervariant">\
                                                <div class="d-flex align-items-center justify-content-center px-2">\
                                                    <img id="img" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                                    <a href="#" class="nav-link textchengecolor text-decoration-none">Filter</a>\
                                                </div>\
                                            </div>\
                                        </div>\
                                    </div>\
                                    <div id="hoverFilter" class="row hoverFilter">\
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

    var code_menu_7 = '<div id="exTab3" class="container">\
                                <ul class="nav nav-pills mx-0 mb-3">\
                                    <li class="active"> <a  href="#1b" class="active" data-toggle="tab">Dashboard page 1</a> </li>\
                                    <li> <a href="#2b" data-toggle="tab">Dashboard page 2</a>  </li>\
                                    <li><a href="#3b" data-toggle="tab">Dashboard page 3</a> </li>\
                                </ul>\
                            </div>';


    // var code_menu_6 = '<div id="mySidenav2" class="sidenav2 shadow">\
    //                     <a href="javascript:void(0)" class="d-flex justify-content-center closebtn2" onclick={closeNav2}>&times;</a>\
    //                     <div class=" d-flex flex-column bd-highlight">\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo1" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2 link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo2" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#"\
    //                                class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"\
    //                                aria-expanded="false">\
    //                                 <div class="logo3" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false">\
    //                                 <div class="logo4" style={{width:"2.5em", height:"2.5em"}}></div>\
    //                             </a>\
    //                         </div>\
    //                         <div class="nav-item hovervariant py-2">\
    //                             <a href="#" class="d-flex align-items-center justify-content-center px-2  link-dark text-decoration-none"  aria-expanded="false"> <div class="logo5" style={{width:"2.5em", height:"2.5em"}}></div> </a>\
    //                         </div>\
    //                     </div>\
    //                 </div>\
    //                     <div class="col-12 pl-0">\
    //                     <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav2} className="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
    //                         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
    //                     </svg>\
    //                 </div>';
    //
    // var code_menu_5 = '<div id="mySidenav" class="sidenav shadow">\
    //        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>\
    //         <ul class="nav nav-pills flex-column mb-auto for_ham">\
    //             <li class="nav-item"> <a href="#" class="nav-link"> Dashboard page 1 </a> </li>\
    //             <li> <a href="#" class="nav-link"> Dashboard page 2 </a> </li>\
    //             <li> <a href="#" class="nav-link"> Dashboard page 3</a> </li>\
    //             <li> <a href="#" class="nav-link">   Dashboard page 4 </a> </li>\
    //             <li> <a href="#" class="nav-link">   Dashboard page 5 </a></li>\
    //         </ul>\
    //         </div>\
    //                     <div class="col-12 pl-0">\
    //             <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" onClick={openNav()} class="d-flex align-items-start bi bi-list hamburger" viewBox="0 0 16 16">\
    //                 <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\
    //             </svg>\
    //         </div>';
    var code_menu_5 = '<div>\
                                    <img id="logomenu" src="images/icons/130.png"/>\
                                </div>';
    var code_menu_6 = '<div>\
                                    <img id="logomenu" src="images/icons/130.png"/>\
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
                                    <select class="form-select form-select-sm"> <option selected>Filter9</option> </select>\
                       </form>\
                            </div>';
    var code_fil_1_full = '<div class="d-flex h-100 w-100">\
                                <form class="full_form col-12">\
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
    var code_fil_2 = '<div class="z-filter2_2">\
                                <form class="row p-1" role="form">\
                                    <div class="col-3"><select class="form-select form-select-sm">\ <option selected>Filter1</option> </select></div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter2</option></select> </div>\
                                    <div class="col-3"><select class="form-select form-select-sm"><option selected>Filter3</option></select></div>\
                                    <div class="col-3"> <select class="form-select form-select-sm"><option selected>Filter4</option></select> </div>\
                                </form>\
                          </div>';
    var code_fil_3 ='<div id="SideFilt" class="row SideFilt">\
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
                            <a href="javascript:void(0)" class="col-1 px-0 closebtnf" id="closeFil"/>\
                        </div>\
                            <div class="d-flex flex-column pt-4 bd-highlight nav3">\
                                <div class="nav-item hovervariant py-4" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Layout.svg" data-hover-src="images/icons/Layout_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Chip.svg" data-hover-src="images/icons/Chip_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Cart.svg" data-hover-src="images/icons/Cart_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Bag.svg" data-hover-src="images/icons/Bag_l.svg"/>\
                                    </div>\
                                </div>\
                                <div class="nav-item hovervariant py-3" id="hovervariant">\
                                    <div class="d-flex align-items-center justify-content-center px-2">\
                                        <img id="imgm" src="images/icons/Map.svg" data-hover-src="images/icons/Map_l.svg"/>\
                                    </div>\
                                </div>\
                                <div id="icon_filter3">\
                                    <div class="nav-item hovervariant py-2" id="hovervariant">\
                                        <div class="d-flex align-items-center justify-content-center px-2">\
                                            <img id="imgm" src="images/icons/Configure_w.svg" data-hover-src="images/icons/Configure_l.svg"/>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>';
    var code_only_fil_3 = '<div id="Float_fil_button">\
                                <img class="m-1 shadow-0" src="images/icons/Configure_l.svg"/>\
                            </div>';

    var code_only_panel_fil_3 = '<div id="FloatFilter" class="row FloatFilter">\
                                <form class="second_form col-11">\
                                    <select class="form-select form-select-sm"><option selected>Filter1</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter2</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter3</option></select>\
                                    <select class="form-select form-select-sm"><option selected>Filter4</option></select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter5</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm">\
                                        <option selected>Filter6</option>\
                                    </select>\
                                    <select class="form-select form-select-sm" size="4" aria-label="size 3 select example">\
                                        <option selected>Filter7</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option>\
                                    </select>\
                                    <select class="form-select form-select-sm">\<option selected>Filter8</option>\</select>\
                                </form>\
                                <a href="javascript:void(0)" class="col-1 px-0 closebtnf" id="closefloatFil"/>\
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

    var code_kpi_4_full = ' <div class="p_card_full">\
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
    var code_kpi_4_full_screen = ' <div class="p_card_full_s">\
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
    var code_kpi_5 = '<div>\
                            <div class="col-12 px-0" id="style_id_kpi5">\
                                <div class="row p_card2">\
                                   <div class="col-md-2 mb-6">\
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
                                    <div class="col-md-2 mb-6">\
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

    var code_kpi_6_full = ' <div class="p_card3_full">\
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
    var code_kpi_6_full_screen = ' <div class="p_card3_full_s">\
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

    //visual

    var code_v_3 = '<div class="box_v1">\
                            <div class="row justify-content-end">\
                                <div class="col-4 pt-2 check_button">\
                                    <input type="radio"\
                                            class="" name="check_button" id="chart"/>\
                                    <label class="shadow-3" id="charts" htmlFor="chart">Таблицы</label>\
                                    <input type="radio"\
                                            class="" name="check_button" id="table"/>\
                                    <label class="shadow-3" id="tables" htmlFor="table">Графики</label>\
                                </div>\
                            </div>\
                        </div>';

    //visual

    console.log("m", m);
    console.log("f", f);
    console.log("k", k);
    console.log("v", v);

    var board = document.getElementById("maket");
    board.classList.add('row');

    if(m === 2)
    {
        var menu1 = document.createElement("div");
        menu1.classList.add('col-1');
        menu1.classList.add('h-100');
        menu1.innerHTML = code_menu_2;
        board.appendChild(menu1);
        var other_placem1 = document.createElement("div");
        other_placem1.classList.add('col-11');
        other_placem1.classList.add('p-0');
        board.appendChild(other_placem1);
        var other_columnm1 = document.createElement("div");
        other_columnm1.classList.add('row');
        other_placem1.appendChild(other_columnm1);
        var title = document.createElement("div");
        title.style.height = "50px";
        title.classList.add('row');
        other_columnm1.appendChild(title);
        if(f===1)
        {
            var m1fil1 = document.createElement("div");
            m1fil1.classList.add('col-2');
            m1fil1.classList.add('mx-0');
            m1fil1.classList.add('px-0');
            m1fil1.classList.add('h-100');
            m1fil1.classList.add('position-relative');
            m1fil1.innerHTML = code_fil_1;
            other_columnm1.appendChild(m1fil1);
            if(k===4)
            {
                var kpi4 = document.createElement("div");
                kpi4.classList.add('col-3');
                kpi4.classList.add('position-relative');
                kpi4.innerHTML = code_kpi_4;
                other_columnm1.appendChild(kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/53table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }else if (v===3){
                    var v3 = document.createElement("div");
                    v3.classList.add('position-relative');
                    v3.innerHTML = code_v_3;
                    other_columnm1.insertBefore(v3, other_columnm1.firstChild);
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                    // document.getElementById("charts").addEventListener("click", function (){
                    //     console.log("ch");
                    //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                    // });
                    // document.getElementById("tables").addEventListener("click", function (){
                    //     console.log("t");
                    //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/53table.png')";
                    // });
                    document.getElementById("chart").addEventListener("click", ChartBack("url('../images/backs/53chart.png')"));
                    document.getElementById("table").addEventListener("click", TableBack("url('../images/backs/53table.png')"));

                    // $('#charts').on('click', function (){
                    //     console.log("chart")
                    //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/53chart.png')";
                    // });
                    // $('#tables').on('click', function (){
                    //     console.log("t")
                    //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/53table.png')";
                    // });
                }
            }
            if(k===5)
            {
                var kpi5 = document.createElement("div");
                kpi5.classList.add('col-10');
                kpi5.classList.add('position-relative');
                kpi5.innerHTML = code_kpi_5;
                other_columnm1.appendChild(kpi5);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/58chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/58table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var orientation = document.createElement("div");
                orientation.classList.add('col-10');
                orientation.classList.add('row');
                orientation.classList.add('justify-content-end');
                other_columnm1.appendChild(orientation);
                var kpi6 = document.createElement("div");
                kpi6.classList.add('col-3');
                kpi6.innerHTML = code_kpi_6;
                orientation.appendChild(kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/59chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/59table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===2)
        {
            var m1fil2 = document.createElement("div");
            m1fil2.classList.add('col-12');
            m1fil2.classList.add('mb-2');
            m1fil2.innerHTML = code_fil_2;
            other_columnm1.appendChild(m1fil2);

            if(k===4)
            {
                var f2kpi4 = document.createElement("div");
                f2kpi4.classList.add('col-3');
                f2kpi4.classList.add('position-relative');
                f2kpi4.innerHTML = code_kpi_4;
                other_columnm1.appendChild(f2kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/55chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/55table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var f2kpi5 = document.createElement("div");
                f2kpi5.classList.add('col-12');
                f2kpi5.classList.add('position-relative');
                f2kpi5.innerHTML = code_kpi_5;
                other_columnm1.appendChild(f2kpi5);
                document.getElementById("style_id_kpi5").style.paddingRight = "1%";
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/65chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/65table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var f2kpi6 = document.createElement("div");
                f2kpi6.classList.add('col-3');
                f2kpi6.classList.add('mt-1');
                f2kpi6.classList.add('position-relative');
                f2kpi6.style.marginLeft = '74%';
                f2kpi6.style.paddingLeft = '7%';
                f2kpi6.innerHTML = code_kpi_6;
                other_columnm1.appendChild(f2kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/66chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/66table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===3)
        {
            board.removeChild(menu1);
            var m1fil3 = document.createElement("div");
            m1fil3.classList.add('col-1');
            m1fil3.classList.add('position-relative');
            m1fil3.classList.add('h-100');
            m1fil3.innerHTML = code_fil_3;
            board.insertBefore(m1fil3, board.firstChild);
            document.getElementById("icon_filter3").addEventListener("click", openFil);
            document.getElementById("closeFil").addEventListener("click", closeFil);
            if(k===4)
            {
                var f3kpi4 = document.createElement("div");
                f3kpi4.classList.add('col-3');
                f3kpi4.classList.add('position-relative');
                f3kpi4.innerHTML = code_kpi_4_full;
                other_columnm1.appendChild(f3kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/68chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/68table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var f3kpi5 = document.createElement("div");
                f3kpi5.classList.add('col-12');
                f3kpi5.classList.add('position-relative');
                f3kpi5.innerHTML = code_kpi_5;
                other_columnm1.appendChild(f3kpi5);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/73chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/73table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var f3kpi6 = document.createElement("div");
                f3kpi6.classList.add('col-3');
                f3kpi6.classList.add('position-relative');
                f3kpi6.style.marginLeft = '73%';
                f3kpi6.style.paddingLeft = '5%';
                f3kpi6.innerHTML = code_kpi_6_full;
                other_columnm1.appendChild(f3kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/74chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/74table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
        }

    }
    else if(m === 3)
    {
        var menu2 = document.createElement("div");
        menu2.classList.add('col-2');
        menu2.classList.add('h-100');
        menu2.innerHTML = code_menu_3;
        board.appendChild(menu2);
        var other_placem2 = document.createElement("div");
        other_placem2.classList.add('col-10');
        board.appendChild(other_placem2);
        var other_columnm2 = document.createElement("div");
        other_columnm2.classList.add('row');
        other_placem2.appendChild(other_columnm2);
        if(f === 1)
        {
            var m2fil1 = document.createElement("div");
            m2fil1.classList.add('col-2');
            m2fil1.classList.add('mx-0');
            m2fil1.classList.add('mt-1');
            m2fil1.classList.add('px-0');
            m2fil1.classList.add('h-100');
            m2fil1.classList.add('position-relative');
            m2fil1.innerHTML = code_fil_1_full;
            other_columnm2.appendChild(m2fil1);
            if(k===4)
            {
                var m2f1kpi4 = document.createElement("div");
                m2f1kpi4.classList.add('col-3');
                m2f1kpi4.classList.add('position-relative');
                m2f1kpi4.style.paddingRight = "5%";
                m2f1kpi4.classList.add('pt-2')
                m2f1kpi4.innerHTML = code_kpi_4_full_screen;
                other_columnm2.appendChild(m2f1kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/84chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/84table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m2f1kpi5 = document.createElement("div");
                m2f1kpi5.classList.add('col-10');
                m2f1kpi5.classList.add('position-relative');
                m2f1kpi5.classList.add('px-0');
                m2f1kpi5.innerHTML = code_kpi_5;
                other_columnm2.appendChild(m2f1kpi5);
                document.getElementById("style_id_kpi5").style.width = "95%";
                document.getElementById("style_id_kpi5").style.marginLeft = "3%";
                document.getElementById("style_id_kpi5").style.marginTop = "1%";
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/82.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/83.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var m2f1kpi6 = document.createElement("div");
                m2f1kpi6.classList.add('col-3');
                m2f1kpi6.classList.add('position-relative');
                m2f1kpi6.style.left = '57%';
                m2f1kpi6.style.paddingTop = '1%';
                m2f1kpi6.style.paddingLeft = '5%';
                m2f1kpi6.innerHTML = code_kpi_6_full_screen;
                other_columnm2.appendChild(m2f1kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/81chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/81table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===2)
        {
            var m2fil2 = document.createElement("div");
            m2fil2.classList.add('col-12');
            m2fil2.classList.add('position-relative');
            m2fil2.style.paddingTop = "1%";
            m2fil2.innerHTML = code_fil_2;
            other_columnm2.appendChild(m2fil2);
            if(k===4)
            {
                var m2f2kpi4 = document.createElement("div");
                m2f2kpi4.classList.add('col-3');
                m2f2kpi4.classList.add('position-relative');
                m2f2kpi4.style.paddingTop = "1%";
                m2f2kpi4.innerHTML = code_kpi_4_full;
                other_columnm2.appendChild(m2f2kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/78chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/78table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m2f2kpi5 = document.createElement("div");
                m2f2kpi5.classList.add('col-12');
                m2f2kpi5.classList.add('position-relative');
                m2f2kpi5.innerHTML = code_kpi_5;
                other_columnm2.appendChild(m2f2kpi5);
                document.getElementById("style_id_kpi5").style.width = "98%";
                document.getElementById("style_id_kpi5").style.marginLeft = "1.5%";
                document.getElementById("style_id_kpi5").style.marginTop = "1%";
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/92chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/92table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var m2f2kpi6 = document.createElement("div");
                m2f2kpi6.classList.add('col-3');
                m2f2kpi6.classList.add('position-relative');
                m2f2kpi6.style.left = '74%';
                m2f2kpi6.style.paddingTop = '1%';
                m2f2kpi6.style.paddingLeft = '3%';
                m2f2kpi6.innerHTML = code_kpi_6_full;
                other_columnm2.appendChild(m2f2kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/79chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/79table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===3)
        {
            board.removeChild(menu2);
            var m2fil3 = document.createElement("div");
            m2fil3.classList.add('col-2');
            m2fil3.classList.add('position-relative');
            m2fil3.classList.add('h-100');
            m2fil3.innerHTML = code_union_menu_3_f3;
            board.insertBefore(m2fil3, board.firstChild);
            document.getElementById("fil").addEventListener("click", openHoverFil);
            document.getElementById("closeHoverFil").addEventListener("click", closeHoverFil);
            if(k===4)
            {
                var m2f3kpi4 = document.createElement("div");
                m2f3kpi4.classList.add('col-3');
                m2f3kpi4.classList.add('position-relative');
                m2f3kpi4.classList.add('mt-1');
                m2f3kpi4.innerHTML = code_kpi_4_full_screen;
                other_columnm2.appendChild(m2f3kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/80chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/80table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m2f3kpi5 = document.createElement("div");
                m2f3kpi5.classList.add('col-12');
                m2f3kpi5.classList.add('position-relative');
                m2f3kpi5.classList.add('mt-1');
                m2f3kpi5.innerHTML = code_kpi_5;
                other_columnm2.appendChild(m2f3kpi5);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/93chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/93table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var m2f3kpi6 = document.createElement("div");
                m2f3kpi6.classList.add('col-3');
                m2f3kpi6.classList.add('position-relative');
                m2f3kpi6.classList.add('mt-1');
                m2f3kpi6.style.left = '74%';
                m2f3kpi6.style.paddingLeft = '3%';
                m2f3kpi6.innerHTML = code_kpi_6_full_screen;
                other_columnm2.appendChild(m2f3kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/97chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/97table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
        }
    }
    else if(m === 4 || m === 7)
    {
        var menu3 = document.createElement("div");
        menu3.classList.add('col-11');
        menu3.classList.add('row');
        menu3.classList.add('align-items-end');
        menu3.style.height = "50px";
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
            m3fil1.classList.add('col-2');
            m3fil1.classList.add('mx-0');
            m3fil1.classList.add('px-0');
            m3fil1.classList.add('h-100');
            m3fil1.classList.add('position-relative');
            m3fil1.classList.add('mt-1');
            m3fil1.innerHTML = code_fil_1;
            other_columnm3.appendChild(m3fil1);
            if(k===4)
            {
                var m3f1kpi4 = document.createElement("div");
                m3f1kpi4.classList.add('col-3');
                m3f1kpi4.classList.add('mt-1');
                m3f1kpi4.classList.add('position-relative');
                m3f1kpi4.style.paddingRight = '3%';
                m3f1kpi4.innerHTML = code_kpi_4_full;
                other_columnm3.appendChild(m3f1kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/117chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/117table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m3f1kpi5 = document.createElement("div");
                m3f1kpi5.classList.add('col-10');
                m3f1kpi5.classList.add('position-relative');
                m3f1kpi5.innerHTML = code_kpi_5;
                other_columnm3.appendChild(m3f1kpi5);
                // if(v===1){
                //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/84chart.png')";
                //     document.getElementById("maket").style.backgroundSize = "100%";
                // }
                // else if(v===2){
                //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/84table.png')";
                //     document.getElementById("maket").style.backgroundSize = "100%";
                // }
            }
            if(k===6)
            {
                var m3f1kpi6 = document.createElement("div");
                m3f1kpi6.classList.add('col-3');
                m3f1kpi6.classList.add('position-relative');
                m3f1kpi6.classList.add('mt-1');
                m3f1kpi6.style.paddingLeft = '7%';
                m3f1kpi6.style.left = '58%';
                m3f1kpi6.innerHTML = code_kpi_6_full;
                other_columnm3.appendChild(m3f1kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/120chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/120table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===2)
        {
            var m3fil2 = document.createElement("div");
            m3fil2.classList.add('col-12');
            m3fil2.classList.add('position-relative');
            m3fil2.classList.add('mt-1');
            m3fil2.innerHTML = code_fil_2;
            other_columnm3.appendChild(m3fil2);
            if(k===4)
            {
                var m3f2kpi4 = document.createElement("div");
                m3f2kpi4.classList.add('col-3');
                m3f2kpi4.classList.add('position-relative');
                m3f2kpi4.classList.add('mt-1');
                m3f2kpi4.innerHTML = code_kpi_4;
                other_columnm3.appendChild(m3f2kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/99chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/99table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m3f2kpi5 = document.createElement("div");
                m3f2kpi5.classList.add('col-12');
                m3f2kpi5.classList.add('position-relative');
                m3f2kpi5.classList.add('h-100');
                m3f2kpi5.innerHTML = code_kpi_5;
                other_columnm3.appendChild(m3f2kpi5);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/99chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/99table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===6)
            {
                var m3f2kpi6 = document.createElement("div");
                m3f2kpi6.classList.add('col-3');
                m3f2kpi6.classList.add('position-relative');
                m3f2kpi6.classList.add('mt-1');
                m3f2kpi6.style.paddingLeft = '7%';
                m3f2kpi6.style.marginLeft = '74%';
                m3f2kpi6.innerHTML = code_kpi_6;
                other_columnm3.appendChild(m3f2kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/100chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/100table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }

        }
        else if(f===3)
        {
            var m3fil3 = document.createElement("div");
            m3fil3.classList.add('col-1');
            m3fil3.style.marginLeft = "15px";
            m3fil3.style.height = "50px";
            m3fil3.classList.add('position-relative');
            m3fil3.innerHTML = code_only_fil_3;
            board.insertBefore(m3fil3, board.firstChild);
            // document.getElementById("Float_fil_button").addEventListener("click", openFloatFil);
            // document.getElementById("closefloatFil").addEventListener("click", closeFloatFil);
            if(k===4)
            {
                var m3f3kpi4 = document.createElement("div");
                m3f3kpi4.classList.add('col-3');
                m3f3kpi4.classList.add('position-relative');
                m3f3kpi4.style.paddingRight = "2%";
                m3f3kpi4.innerHTML = code_kpi_4_full;
                other_columnm3.insertBefore(m3f3kpi4, other_columnm3.firstChild);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/101chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/101table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
            if(k===5)
            {
                var m3f3kpi5 = document.createElement("div");
                m3f3kpi5.classList.add('col-12');
                m3f3kpi5.classList.add('position-relative');
                m3f3kpi5.classList.add('mt-1');
                m3f3kpi5.classList.add('h-100');
                m3f3kpi5.innerHTML = code_kpi_5;
                other_columnm3.insertBefore(m3f3kpi5, other_columnm3.firstChild);
                // if(v===1){
                //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/101chart.png')";
                //     document.getElementById("maket").style.backgroundSize = "100%";
                // }
                // else if(v===2){
                //     document.getElementById("maket").style.backgroundImage = "url('../images/backs/101table.png')";
                //     document.getElementById("maket").style.backgroundSize = "100%";
                // }
            }
            if(k===6)
            {
                var m3f3kpi6 = document.createElement("div");
                m3f3kpi6.classList.add('col-3');
                m3f3kpi6.classList.add('position-relative');
                m3f3kpi6.classList.add('mt-1');
                m3f3kpi6.style.paddingLeft = '7%';
                m3f3kpi6.style.marginLeft = '74%';
                m3f3kpi6.innerHTML = code_kpi_6_full;
                other_columnm3.insertBefore(m3f3kpi6, other_columnm3.firstChild);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/121chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/121table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
            }
        }

    }
    else if( m === 5 || m === 6)
    {
        var menu4 = document.createElement("div");
        menu4.classList.add('col-12');
        menu4.style.height = '50px';
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
            m4fil1.classList.add('col-2');
            m4fil1.classList.add('mx-0');
            m4fil1.classList.add('px-0');
            m4fil1.classList.add('h-100');
            m4fil1.classList.add('position-relative');
            m4fil1.innerHTML = code_fil_1;
            other_columnm4.appendChild(m4fil1);
            if(k===4)
            {
                var m4f1kpi4 = document.createElement("div");
                m4f1kpi4.classList.add('col-3');
                m4f1kpi4.style.paddingRight = '3%';
                m4f1kpi4.classList.add('position-relative');
                m4f1kpi4.innerHTML = code_kpi_4_full;
                other_columnm4.appendChild(m4f1kpi4);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/128chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/128table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
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
                m4f1kpi6.classList.add('col-3');
                m4f1kpi6.classList.add('position-relative');
                m4f1kpi6.style.paddingLeft = '7%';
                m4f1kpi6.style.left = '58%';
                m4f1kpi6.innerHTML = code_kpi_6_full;
                other_columnm4.appendChild(m4f1kpi6);
                if(v===1){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/120chart.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
                else if(v===2){
                    document.getElementById("maket").style.backgroundImage = "url('../images/backs/120table.png')";
                    document.getElementById("maket").style.backgroundSize = "100%";
                }
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



return(
        <>
        </>
    )
}
