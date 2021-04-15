import React, {
    useState, useEffect
} from 'react'
import { IconButton } from '@material-ui/core';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

const MoreButton = () => {

    // const [name, function] = useState(startState);
    // const [] = useEffect();

    return(
        <React.Fragment>
            <IconButton variant="contained" color="primary" onClick={onButtonClick()}>
                <MoreHorizOutlinedIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
        // <Button variant="contained" color="primary" onClick={onButtonClick}>More</Button>
    )

}

function onButtonClick(){

    console.log('Button CLICK More...' )
}


export default MoreButton
