import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { amber } from '@material-ui/core/colors';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
function Nabvar() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton>
                        <SportsCricketIcon style={{ color: amber[500], marginLeft: 20, marginRight: 10 }} />
                    </IconButton>
                    <Typography variant='h6'>Live Cricket Score</Typography>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Nabvar
