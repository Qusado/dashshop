import {Link, useParams} from "react-router-dom";
import {useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/Auth.Context";


export const Profile = () => {
    const {token} = useContext(AuthContext)
    const {userId} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [user, setUser] = useState()

    const getUser = useCallback(async ()=>{
        console.log(userId)
        try{
            const fetched = await request(`/api/users/${userId}`, 'GET', null, {
                Authorization : `Bearer ${token}`
            })
            console.log('Data', fetched)
            setUser(fetched)
            console.log(user)
        } catch (e){

        }
    }, [token, userId, request])

    useEffect( () =>{
        getUser()
    }, [getUser])

    return (
        <div>
            {!loading && user && <h6>{user.email}</h6>}

        </div>
    )
}
