import  {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSinglecourse } from '../../actions/course';
import {useParams } from "react-router-dom";



const Course = () => {

    let params = useParams();

    const course = useSelector(state=>state.course);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSinglecourse(params.id))
    },[])

    return ( 
        <>
            <div className="DivSinglecourse ">
             <div className="z-depth-2">
             <div>
                    <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} style={{width:"100%",height:"400px"}} alt=""/>
                </div>
                <div>
                   <h6 style={{fontWeight:"bold"}}>{course.title}</h6>
                </div>
                <div>
                    <p>{course.info}</p>
                </div>
             </div>
            </div>
        </>
     );
}
export default Course;