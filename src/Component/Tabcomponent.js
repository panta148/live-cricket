import { Tabs, Tab } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Score from './Score';
import { getCricketMatches } from './Cricketapi'
import { Box, Typography } from '@material-ui/core'
function Tabcomponent() {
    const [value, setvalue] = useState(0);
    const [matches, setmatches] = useState([])
    const handleChange = (e, value) => {
        setvalue(value);

    }

    function getData(type) {
        return (
            matches.map(match => {
                return (
                    <div key={match.unique_id}>
                        {match.type === type ? <Box alignItems='center' display='flex' justifyContent='center'><Score match={match} key={match.unique_id} /></Box> : ''}
                    </div>
                )
            })
        )



    }
    useEffect(() => {
        getCricketMatches().then(data => {
            setmatches(data.matches);
            console.log(data.matches);

        }).catch(error => console.log(error));


    }, []);
    function TabPanel(props) {
        return (
            <>
                {props.value === props.index && (<Box> <Typography>{props.children}</Typography></Box>)}

            </>
        )
    }
    return (
        <>
            <Tabs value={value} indicatorColor='primary' onChange={handleChange}>
                <Tab label='One-Day' />
                <Tab label='Twenty20' />
                <Tab label='Test' />
            </Tabs>
            <TabPanel index={0} value={value}>
                {getData('')}
            </TabPanel>
            <TabPanel index={1} value={value}>
                {getData('Twenty20')}
            </TabPanel>
            <TabPanel index={2} value={value}>
                {getData('Test')}
            </TabPanel>

        </>
    )
}

export default Tabcomponent;
