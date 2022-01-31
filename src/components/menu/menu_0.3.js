import React, {useContext} from 'react'

export const Menu_03 = () => {
    return (
        <div className="row">
            <ul className="nav justify-content-center boarder">
                <li className="nav-item">
                    <a className="nav-link titletext active" href="#">Dashboard page 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link titletext"  href="#">Dashboard page 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link titletext"  href="#">Dashboard page 3</a>
                </li>
            </ul>

                <div className="col-12 screen">
                    <img className="img-fluid"  src="frames/Frame 41.svg"/>
                </div>
        </div>
    )
}
