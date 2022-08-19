import React from 'react'
import { Box, Typography } from '@material-ui/core'
function TabPanel(props) {
    return (
        <>
            {props.value === props.index && (<Box> <Typography>{props.children}</Typography></Box>)}

        </>
    )
}

export default TabPanel