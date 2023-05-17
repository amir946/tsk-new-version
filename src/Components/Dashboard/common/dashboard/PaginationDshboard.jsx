import { Fragment } from "react";
import { Link } from "react-router-dom";


const PaginationDshboard = ({pages,currentPage,handlePage}) =>{
    return (
        <div  id="PaginationDshboard">
        <ul className="pagination">
            <li className={currentPage === 1 ? "disabled" : "waves-effect"}><a href="#!" style={{fontSize:"13px"}}>صغحه قبل</a></li>
            {pages.map((page,index)=>(
               <Fragment key={index}>
                    <li className={page === currentPage ? "active waves-effect" : "waves-effect"}>
                    <Link to="/layoutDashboard" onClick={()=>handlePage(page)}>
                        {page}
                        </Link>
                    </li>
               </Fragment>
            ))}
            <li className={currentPage >= 3 ? "disabled" : "waves-effect"}><a style={{fontSize:"13px"}}>صفحه بعد</a></li>
        </ul>
    </div>
    );

};
export default PaginationDshboard;