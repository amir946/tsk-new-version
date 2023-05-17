import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../actions/user';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state=>state=>user)
    useEffect(()=>{
        localStorage.removeItem("token");
        dispatch(clearUser());
    },[])
    if(isEmpty(user)) return navigate("/")
    return ( null );
}
 
export default Logout;