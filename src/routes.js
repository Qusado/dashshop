import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { MainPage } from './pages/main.page.js';
import {Constructor} from "./pages/Constructor.js";
import {OnemaketPage} from "./pages/onemaket.page.js";
import {Profile} from "./pages/profile.page";
import {Lox} from "./components/Lox";
import {Dd_modal} from "./components/dd_modal";


export const useRoutes = isAuthenticated =>{
    // if(isAuthenticated)
    // {
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
    // }
    //
    // return (
    //     <Switch>
    //         <Route path="/register" exact>
    //             <AuthPage />
    //         </Route>
    //         <Route path="/login" exact>
    //             <LoginPage />
    //         </Route>
    //         {/*<Route exact path="/menu/:id_menu" component={View_one_menuPage}/>*/}
    //         <Route exact path="/" component={MainPage}/>
    //         {/*<Route exact path="/constructor" component={Constructor}/>*/}
    //         {/*<Route exact path="/a" component={StatusBar}/>*/}
    //         {/*<Route exact path="/one/:id_maket" component={OnemaketPage}/>*/}
    //         <Route exact path="/desk" component={Desk}/>
    //         {/*<Route exact path="/constructor/:id_step" component={Constructor}/>*/}
    //         <Redirect to="/login"/>
    //
    //     </Switch>
    // )

}
