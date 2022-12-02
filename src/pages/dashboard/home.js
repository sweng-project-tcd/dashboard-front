// next
import Head from 'next/head';
import { Container, Typography, Grid, Button} from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/DashboardLayout';

import { WeeklySummaryWidget, TeamCommits, DimensionsGraph, BugRate } from '../../sections';
import { useTheme } from '@mui/material/styles';
import { useEffect, useCallback, useState } from 'react';
import axios from '../../utils/axios';

// ----------------------------------------------------------------------

DashboardHome.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function DashboardHome() {


  const theme = useTheme();

  // test method just to show how we can make calls to the API. 
  // const getTestData = useCallback(async () => {
  //   try{
  //     const response = await axios.get('/v1/test');
  //     console.log(response);
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }, []);

    return (
<>
      <Head>
        <title> Page One | Minimal UI</title>
      </Head>

      <Container maxWidth='xl'>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome to your metrics dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Weekly Commits" total={714000} icon={'ri:git-repository-commits-fill'}  percent={20}  chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Daily Commits" total={714000} icon={'ri:git-repository-commits-fill'} percent={30}  chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Total Contributors" total={714000} icon={'ri:git-repository-commits-fill'} percent={40} chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <BugRate
              total={207}
              percent={2.6}
              chart={{
                series: [111, 136, 76, 108, 74, 54, 57, 84],
              }}
          />
            
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DimensionsGraph
                title="Organizational Dimensions"
                chart={{
                  categories: ['Commits', 'Pull Request', 'Code Review', 'Issues'],
                  colors: [theme.palette.colors.blue, theme.palette.colors.green, theme.palette.colors.orange],
                  series: [
                    { name: 'Data Engineering', data: [80, 50, 30, 40] },
                    { name: 'Product Engineering', data: [20, 30, 40, 80] },
                    { name: 'Growth Team', data: [44, 76, 78, 13] },
                  ],
                }}
              />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <TeamCommits
                title="Commits per team member"
                subheader="(+10%) than last week"
                chart={{
                  series: [
                    { label: 'John', value: 400 },
                    { label: 'Michael', value: 500},
                    { label: 'Mary', value: 600},
                    { label: 'Michelle', value: 800},
                    { label: 'Bridget', value: 1000},
                    { label: 'Sarah', value: 1200},
                    { label: 'James', value: 1400},
                    { label: 'David', value: 1600},
                  ],
                }}
              />
           
          </Grid>

        </Grid>
      </Container>
    </>
    )
}