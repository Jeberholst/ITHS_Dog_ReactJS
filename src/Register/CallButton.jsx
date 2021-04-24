import { Phone } from '@material-ui/icons'
import { IconButton } from '@material-ui/core';

const CallButton = (props) => {
    const phoneNumber = props.phoneNumber

    return(
        <IconButton variant="contained" color="primary" onClick={function (){
            console.log('Button CLICK ' + phoneNumber)
        }}>
             <Phone style={{fill: "#799973"}} fontSize="small" />
        </IconButton>
    )

} 

export default CallButton