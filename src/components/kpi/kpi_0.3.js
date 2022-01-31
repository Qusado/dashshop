import React, {useContext} from 'react'
import {baseUrl} from "../baseRoute";

export const Kpi_03 = () => {
    return (
        <div className="position-relative">
            <div className="box_card3 container px-0">
                <div className="row justify-content-end">
                    <div className="col-3">
                        <div className="p_card3" style={{paddingLeft:'21%', paddingRight:'0px'}}>
                            <div className="card">
                                <div className="text-center mb-0 title_kpi3">Title1</div>
                                <div className="text-center p-0 mb-1 num_kpi3">7854 млн</div>
                                <div className="text-center green_kpi3"> &#8679; +15%</div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi3">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi3">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi3"> &#8681; -0.98%</div>
                            </div>
                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi3">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi3">7854 млн</div>
                                </div>
                                <div className="card-text text-center green_kpi3"> &#8679; +15%</div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi3">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi3">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi3"> &#8681; -0.98%</div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi3">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi3">7854 млн</div>
                                </div>
                                <div className="card-text text-center green_kpi3"> &#8679; +15%</div>
                            </div>

                            <div className="card">
                                <div className="card-title text-center mb-0 title_kpi3">Title1</div>
                                <div className="card-body p-0">
                                    <div className="card-title text-center mb-0 num_kpi3">7854 млн</div>
                                </div>
                                <div className="card-text text-center red_kpi3"> &#8681; -0.98%</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div id="mask">
                <img className="img-fluid"  src={baseUrl+"frames/Frame 45.svg"}/>
            </div>
        </div>


    )
}
