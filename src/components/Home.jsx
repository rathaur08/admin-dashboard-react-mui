import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';


import "./home.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack direction="row" spacing={2}>
                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lorems are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lorem
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Lorems are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card>
                  <Stack direction="row" spacing={2}>
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span>$ 203k</span>
                      <br />
                      <span>Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card >
                  <Stack direction="row" spacing={2}>
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingall">
                      <span>$ 203k</span>
                      <br />
                      <span>Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>

          </Grid>
          <Box height={10} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lorem
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lorem
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home