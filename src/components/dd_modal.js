import React, {useContext, useState} from 'react'
import '../css/d_modal.css'



export const Dd_modal = ({form, graphs, visual_active, setVisual_active}) => {


    const ClearHandler = (event)=>{

    }

    const [boards, setBoards] = useState([
        {id:1, items:'', title:""},
        {id:2, items:'', title:""},
        {id:3, items:'', title:""},
        {id:4, items:'', title:""},
        {id:5, items:'', title:""},
        {id:6, items:'', title:""}
    ]);
    function dragStart(event) {
       event.dataTransfer.setData("id", event.target.id);
       event.dataTransfer.setData("images", event.target.getAttribute("data-images"));
    }
    function dragEnter(event) {
        event.preventDefault();
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.add("droppable-hover");
        }
    }
    function dragOver(event) {
        event.preventDefault();
        if(!event.target.classList.contains("dropped")) {
            event.preventDefault();
        }
    }
    function dragLeave(event) {
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.remove("droppable-hover");
        }
    }

    function drop(event) {
        if(!event.target.classList.contains("dropped")) {
            event.target.classList.remove("droppable-hover");
            const draggableElementId = event.dataTransfer.getData("id");
            const draggableElementData = event.dataTransfer.getData("images")
            event.target.insertAdjacentHTML("afterbegin", `<img class="insertGraph dropped" draggable="false" id="${draggableElementId}" src="graph/${draggableElementData}"/><button type="button" onClick={ClearHandler} class="remove_graph">очистить</button>`);
            event.target.classList.add("dropped");
            const curId = event.target.id;
            boards[curId - 1].items = event.target.firstChild.id;
            console.log(event.target.firstChild)
        }
    }
    function dragEnd(event){
    }



    function clearAfterSave(){
        document.getElementsByName("input_group").forEach(element => element.value = '');
        document.getElementsByName("insert_group").forEach(element => {
            if(element.childElementCount>0){
                element.removeChild(element.firstChild);
            }
            element.classList.remove("dropped");
        });
    }

    const SaveHandler = (event)=>
    {
        console.log(boards);
        form.g1 = boards[0].items;
        form.g1_title = document.getElementById("input1").value;
        form.g2 = boards[1].items;
        form.g2_title = document.getElementById("input2").value;
        form.g3 = boards[2].items;
        form.g3_title = document.getElementById("input3").value;
        form.g4 = boards[3].items;
        form.g4_title = document.getElementById("input4").value;
        form.g5 = boards[4].items;
        form.g5_title = document.getElementById("input5").value;
        form.g6 = boards[5].items;
        form.g6_title = document.getElementById("input6").value;

        setVisual_active(false);
        clearAfterSave();
    }


    clearAfterSave();

    return(
        <div className="row mx-3 my-2">
            <h3 className="mb-2">Выбор графиков для визуализации данных</h3>
            <div className="col-9 fon_maket" style={{height:"500px", backgroundImage:"url(graph_fon.png)"}}>
                <div className="row justify-content-end h-100">
                    <div className="col-10 px-0">
                        <div className="row h-100 align-items-end px-3">
                            <div className="row px-0" style={{height:"75%"}}>
                                <div className="col-4 mb-2" id="1" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text" name="input_group" className="form-control form-control-sm mb-1" id="input1" placeholder="название графика"/>
                                    <div name="insert_group" className="droppable card h-100 cell" id="1"
                                     onDragOver={(e)=> dragOver(e)}
                                     onDragEnter={(e)=> dragEnter(e)}
                                     onDragLeave={(e) => dragLeave(e)}
                                     onDrop={(e)=> drop(e)}
                                   >
                                    </div>
                                </div>
                                <div className="col-4 mb-2" id="2" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text"  name="input_group" className="form-control form-control-sm mb-1" id="input2" placeholder="название графика"/>
                                    <div className="droppable card h-100 cell" id="2" name="insert_group"
                                         onDragOver={(e)=> dragOver(e)}
                                         onDragEnter={(e)=> dragEnter(e)}
                                         onDragLeave={(e) => dragLeave(e)}
                                         onDrop={(e)=> drop(e)}
                                    >
                                    </div>
                                </div>
                                <div className="col-4 mb-2" id="3" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text" name="input_group" className="form-control form-control-sm mb-1" id="input3" placeholder="название графика"/>
                                    <div className="droppable card h-100 cell" id="3" name="insert_group"
                                         onDragOver={(e)=> dragOver(e)}
                                         onDragEnter={(e)=> dragEnter(e)}
                                         onDragLeave={(e) => dragLeave(e)}
                                         onDrop={(e)=> drop(e)}
                                    >
                                    </div>
                                </div>
                                <div className="col-4 mb-2" id="4" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text" name="input_group" className="form-control form-control-sm mb-1" id="input4" placeholder="название графика"/>
                                    <div className="droppable card h-100 cell" id="4" name="insert_group"
                                         onDragOver={(e)=> dragOver(e)}
                                         onDragEnter={(e)=> dragEnter(e)}
                                         onDragLeave={(e) => dragLeave(e)}
                                         onDrop={(e)=> drop(e)}
                                    >
                                    </div>
                                </div>
                                <div className="col-4 mb-2" id="5" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text" name="input_group" className="form-control form-control-sm mb-1" id="input5" placeholder="название графика"/>
                                    <div className="droppable card h-100 cell" id="5" name="insert_group"
                                         onDragOver={ (e)=>dragOver(e)}
                                         onDragEnter={(e)=> dragEnter(e)}
                                         onDragLeave={(e) => dragLeave(e)}
                                         onDrop={(e)=> drop(e)}
                                    >
                                    </div>
                                </div>
                                <div className="col-4 mb-2" id="6" style={{height:"38%", paddingLeft: "20px", paddingRight:"1px"}}>
                                    <input type="text" name="input_group" className="form-control form-control-sm mb-1" id="input6" placeholder="название графика"/>
                                    <div className="droppable card h-100 cell" id="6" name="insert_group"
                                         onDragOver={(e)=> dragOver(e)}
                                         onDragEnter={(e)=> dragEnter(e)}
                                         onDragLeave={(e) => dragLeave(e)}
                                         onDrop={(e)=> drop(e)}
                                    >
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-3 right_modal_part">
                <div className="h-100 position-relative">
                    <section className="draggable-elements justify-content-center">
                        {graphs && graphs.map(graph =>
                            <div className="col-9 mb-4 mx-auto" >
                                <img className="visualGraph draggable"
                                     draggable="true"
                                     id={`${graph.constructor_chart}`}
                                     data-images={`${graph.layout_img}`}
                                     src={`graph/${graph.layout_img_variant}`}
                                     onDragStart={(e)=> dragStart(e)}/>
                            </div>
                        )}
                    </section>
                </div>
            </div>
            <div className="row col-12 justify-content-end mt-4">
                <input type="button" className="save_btn shadow-sm" onClick={SaveHandler} value="Сохранить"/>
            </div>


        </div>
    )
}
