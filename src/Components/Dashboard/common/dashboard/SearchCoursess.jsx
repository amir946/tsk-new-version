
const SearchCoursess = ({setSearch}) =>{
    return(
        <div className="row">
        <form onSubmit={(event) => event.preventDefault()}  id="Inputsearchdashbpard">
          <input onChange={(event)=>setSearch(event.target.value)}
          placeholder="جستجوی دوره ها ..." type="text"/>
        </form>
    </div>
    );
};
export default SearchCoursess;  