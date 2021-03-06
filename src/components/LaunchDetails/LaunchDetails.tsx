import React,{useEffect} from 'react';
import {LaunchInfoQuery} from '../../generated/graphql';
import './style.css';
import { Typography, Grid, Container, List, ListItem, Divider } from '@material-ui/core';
import Aos from 'aos';
import {Header} from '../Header';
import 'aos/dist/aos.css';
interface Props {
    data: LaunchInfoQuery;
}

const LaunchDetails:React.FC<Props>=({data})=>{
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    if(!data.launch){
        return<div>its not available</div>
    }   
    const url = data?.launch.links?.video_link;
    console.log(url)
    const url2 = (url as unknown as string).replace("watch?v=", "embed/");
    console.log(url2)
    return(
        <>
        <Header/>
        <Grid container className='LaunchDetails'>
        <Container data-aos="fade-up" className="launch-page" >
            <List style={{ color: '#c5c6c7' }}  >
                <ListItem style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h3" gutterBottom > <b>MISSION NAME:  {data?.launch.mission_name} </b></Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#1e81b0' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom>  {data?.launch.details}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#1e81b0' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>  <b>LAUNCH SITE NAME: </b> {data?.launch.launch_site?.site_name}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#1e81b0' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom> <b>LAUNCH YEAR: </b> {data?.launch.launch_year}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#1e81b0' }} />
                <ListItem>
                    <Typography variant="h5" gutterBottom> <b>STATUS: </b> {data?.launch.launch_success ? "Success":"Fail"}</Typography>
                </ListItem>
                <Divider style={{ backgroundColor: '#1e81b0' }} />
            </List>
           
        </Container>
    </Grid>
    </>
    )
};

export default LaunchDetails;