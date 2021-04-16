import React from 'react'
import { IconButton } from '@material-ui/core';
import { selectedDog, setData } from './DataFetcher';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import ReactDOM from 'react-dom';
import ContainerMoreDogInfo from './ContainerMoreDogInfo';

const MoreButton = (props) => {

    // const [name, function] = useState(startState);
    // const [] = useEffect();

    return(
        <React.Fragment>
            <IconButton variant="contained" color="primary" onClick={function (){
                console.log('Button CLICK More...')
                setData(props)
                const element = document.getElementById('dog-info')
                ReactDOM.render(<ContainerMoreDogInfo props={{selectedDog}}></ContainerMoreDogInfo>, element)
                // console.log({selectedDog})
            }}>
                <MoreHorizOutlinedIcon style={{fill: "black"}}  fontSize="small" />
            </IconButton>
        </React.Fragment>

    );

}


export default MoreButton
