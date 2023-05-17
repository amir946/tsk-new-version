import {Donotwork} from "../index";
import { useSelector } from 'react-redux';


const Donotworks = () => {

    const donotworks =useSelector(state => state.donotworks)

    return ( 
        <>
            {donotworks.map( z => (
                <Donotwork
                key={z.id}
                fullnamedonotwork ={z.fullnamedonotwork}
                />
            ))}
        </>
     );
}
 
export default Donotworks;