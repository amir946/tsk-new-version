import { Link } from "react-router-dom";

const Pagination = ({pages,currentPage,handlePage}) =>{
    return(
        <div id="paginarion">
        <ul className="pagination">
            <li className={currentPage === 1 ? "disabled" : "waves-effect"}><a href="#!" style={{fontSize:"13px"}}>صغحه قبل</a></li>
            {pages.map((page , index)=>(
               <>
                    <li key={index} className={page === currentPage ? "active waves-effect" : "waves-effect"}>
                    <Link to="/courses" onClick={()=>handlePage(page)}>
                        {page}
                        </Link>
                    </li>
               </>
            ))}
            <li className={currentPage >= 3 ? "disabled" : "waves-effect"}><a style={{fontSize:"13px"}}>صفحه بعد</a></li>
        </ul>
    </div>
    );
};
export default Pagination;