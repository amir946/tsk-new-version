
import {Dowork} from '../index';
import { useSelector } from 'react-redux';

const DoWorks = () => {

    const doworks =useSelector(state => state.doworks)

    return ( 
        <>
                    {doworks.map(D =>(
                        <Dowork
                        key={D.id}
                        fullnamedowork={D.fullnamedowork}
                        />
                    ))}
        </>
     );
}
 
export default DoWorks;