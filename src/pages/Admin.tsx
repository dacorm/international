import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../assets/hooks";
import {selectIsAuth, selectName} from "../redux/slices/auth";
import {useNavigate} from "react-router-dom";

const Admin = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const user = useAppSelector(selectName);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isUserAdmin = isAuth && (user.fullName === 'admin')

    useEffect(() => {
        if (!isUserAdmin) {
            navigate('/')
        }
    }, [isUserAdmin])

    return (
        <div>
            Admin
        </div>
    );
};

export default Admin;