import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { MainPage } from './pages/main.page.js';
import {Constructor} from "./pages/Constructor.js";
import {OnemaketPage} from "./pages/onemaket.page.js";
import {Profile} from "./pages/profile.page";
import {Lox} from "./components/Lox";
import {Dd_modal} from "./components/dd_modal";


export const useRoutes = isAuthenticated =>{
        return (
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/profile" component={Profile}/>



                <Route exact path="/dd_modal" component={Dd_modal}/>
                <Route exact path="/lol" component={Lox}/>
                <Route exact path="/constructor" component={Constructor}/>
                <Route exact path="/one/:id_maket" component={OnemaketPage}/>
                    <Redirect to="/"/>
            </Switch>
        )
}
