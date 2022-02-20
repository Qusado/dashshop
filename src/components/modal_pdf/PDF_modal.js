import React, {useCallback, useContext, useEffect, useState} from 'react';
import "./pdf_modal.css"
import {Pdf_doc} from "../pdf_doc";


export const PDF_modal = ({pdf_active, setPdf_active, form, menu, kpi, filter, visual, report, charts, graphs }) => {

    return(
        <div className={pdf_active? "modal_p active" : "modal_p"} onClick={()=> {
            setPdf_active(false);
        }}>

            <div className={pdf_active? "modal_p__content active" : "modal_p__content"} onClick={e=>e.stopPropagation()}>
                <a href="#" className="close_modal" onClick={()=> {setPdf_active(false)}}>&times;</a>
                <Pdf_doc form={form} menu={menu} kpi={kpi} filter={filter} visual={visual} report={report} charts={charts} graphs={graphs}/>
            </div>

        </div>
    )
};
