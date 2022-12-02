// next
import Head from 'next/head';

import { Container, Typography, Grid, CardHeader, Card, Box, Button} from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/DashboardLayout';

import { WeeklySummaryWidget, TeamCommits, DimensionsGraph, BugRate } from '../../sections';
import { useTheme } from '@mui/material/styles';

import CommitTypes from '../../sections/CommitTypes';
import Chart from '../../components/chart';

import { useEffect, useCallback, useState } from 'react';
import axios from '../../utils/axios';


// ----------------------------------------------------------------------

DashboardHome.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function DashboardHome() {

  const REPO_ORG = 'sweng-project-tcd'
  const REPO_NAME = 'dashboard-front'


  const theme = useTheme();

  const [weeklyCommits, setWeeklyCommit] = useState(0);
  const [dailyCommits, setDailyCommit] = useState(0);
  const [contributors, setContributors] = useState([]);
  const [bugRate, setBugRate] = useState(0);

  const getWeeklyCommits = useCallback(async () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() - 7);
      const response = await axios.get('/v1/dummy/repo/commits' + '?start=' + date.toISOString().slice(0, 10) + '&end=' + new Date().toISOString().slice(0, 10));
      setWeeklyCommit(response.data.num_commits);
      setContributors(response.data.authors);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getDailyCommit = useCallback(async () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const response = await axios.get('/v1/dummy/repo/commits' + '?start=' + date.toISOString().slice(0, 10) + '&end=' + new Date().toISOString().slice(0, 10));
      setDailyCommit(response.data.num_commits);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getBugRate = useCallback(async () => {
    try {
      const date = new Date();
      date.setDate(date.getDate() - 30);
      const response = await axios.get('/v1/dummy/repo/bugs' + '?start=' + date.toISOString().slice(0, 10) + '&end=' + new Date().toISOString().slice(0, 10));
      setBugRate(response.data.num_bugs);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getWeeklyCommits();
    getDailyCommit();
    getBugRate();
  }, [getWeeklyCommits, getDailyCommit, getBugRate]);



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
        <Button onClick={getWeeklyCommits}>Get Weekly Commits</Button>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Weekly Commits" total={weeklyCommits} icon={'ri:git-repository-commits-fill'}  percent={20}  chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Daily Commits" total={dailyCommits} icon={'ri:git-repository-commits-fill'} percent={30}  chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <WeeklySummaryWidget title="Total Contributors" total={contributors.length} icon={'ri:git-repository-commits-fill'} percent={40} chart={{
                colors: [theme.palette.primary.main],
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
              }}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <BugRate
              total={bugRate}
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
          <Grid item xs={12} sm={6} md={4}>
          <CommitTypes
                title="Commit types by team member"
                chart={{
                  categories:['John','Michael','Mary','Michelle', 'Bridget', 'Sarah'],
                  
                  series:[
                    {name: 'Code additions', data:[7,13,7,4,4,9]},
                    {name: 'Code Deletions', data:[12,13,20,4,8,9]},
                  ],
                }}
          />

          </Grid>

        </Grid>
      </Container>
    </>
    )
}