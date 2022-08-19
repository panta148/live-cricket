import React, { useState } from 'react'
import { getCricketMatchDetails } from './Cricketapi';
import { Card, CardContent, Button, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box } from '@material-ui/core';
import Logo from '../images/Logo1.png'
const styles = {
    h7: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    },
    matchDetails: {
        marginLeft: 'auto',
        marginRight: 20,
    }

}

const Score = (props) => {
    const [newmatch, setnewmatch] = useState({})
    const getDetails = (id) => {
        getCricketMatchDetails(id).then(data => {
            setnewmatch(data);
            console.log(data);
            console.log(newmatch);

        }).catch(error => console.log(error))
    }
    return (

        <Card style={{ marginTop: 20, width: 700 }}>
            <Box style={{ display: 'flex', backgroundColor: '#3f51b5', padding: '5px' }}>
                <Typography className={props.classes.h7}>{props.match['team-1']} VS {props.match['team-2']}</Typography>
                <Button variant='contained' color='primary' size='small' style={{ marginLeft: 'auto', border: '1px solid #fff' }} onClick={() => getDetails(props.match.unique_id)} disabled={props.match.matchStarted ? false : true}>Score</Button>

            </Box>
            <Box style={{ display: 'flex', marginLeft: 20 }}>
                <Typography> {new Date(props.match.dateTimeGMT).toLocaleString()}</Typography>
                <Typography className={props.classes.matchDetails}>{props.match.matchStarted ? 'Match is Started' : 'Match is not yet started'}</Typography>
            </Box>
            <CardContent>
                <Grid container justify='center' alignItems='center'>
                    <Typography>{props.match['team-1']}</Typography>
                    <img src={Logo} alt="logo" style={{ width: 100, height: 100, marginLeft: 20, marginRight: 20 }} />
                    <Typography>{props.match['team-2']}</Typography>
                </Grid>
            </CardContent>
            <CardActions container justify='center'>
                <Grid container style={{ display: 'block' }}>
                    <Typography align='center'>{newmatch.score}</Typography>
                    <Typography align='center'>Limited in Person attendance</Typography>
                </Grid>
            </CardActions>
        </Card >
    )
}

export default withStyles(styles)(Score)
