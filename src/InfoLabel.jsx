import { Box } from '@material-ui/core';

const InfoLabel = ({ text, bgColor }) => {

    const boxStyle = {
        display: 'inline',
        width: "fit-content",
        height: "fit-content",
        padding: 5,
        marginRight: 5,
        color: '#ffffff',
        borderRadius: 10,
        background: `${bgColor}`
      };

    return(
        <Box style={boxStyle}>
             {text}
        </Box>
    );

} 

export default InfoLabel