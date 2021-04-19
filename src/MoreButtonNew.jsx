import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import MoreInfoDialog from './MoreInfoDialog';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { setData } from './DataFetcher';

const divStyle = {
  display: 'inline',
  width: 'fit-content',
  height: "fit-content",
};

const MoreButtonNew = ({ dialogData }) => {

  const [shouldOpen, setIsOpen] = useState(false);

  const setShouldOpen = () => {
    setIsOpen(true)
  }

  const setShouldClose = () => {
    setIsOpen(false)
  }

  return (
    <div style={divStyle}> 

        <IconButton 
          color="inherit" 
          onClick={ function() {
                setData(dialogData)
                setShouldOpen();
            }
          }
          >
          <MoreHorizOutlinedIcon/>
        </IconButton>
     
        <div>
          <MoreInfoDialog
                openDialog={shouldOpen} 
                closeDialog={() => setShouldClose}
                dialogData={dialogData}
                />
        </div>
    </div>
  );
}

export default MoreButtonNew;