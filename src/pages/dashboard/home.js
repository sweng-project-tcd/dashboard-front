// next
import Head from 'next/head';
import { Container, Typography, Grid} from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/DashboardLayout';

import { WeeklySummaryWidget, TeamCommits, DimensionsGraph } from '../../sections';

// ----------------------------------------------------------------------

DashboardHome.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default function DashboardHome() {

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
          <Grid item xs={12} sm={6} md={3}>
            <WeeklySummaryWidget title="Weekly Commits" total={714000} icon={'ri:git-repository-commits-fill'} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
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
            <DimensionsGraph
                title="Organizational Dimensions"
                chart={{
                  categories: ['Commits', 'Pull Request', 'Code Review', 'Issues'],
                  series: [
                    { name: 'Data Engineering', data: [80, 50, 30, 40] },
                    { name: 'Product Engineering', data: [20, 30, 40, 80] },
                    { name: 'Growth Team', data: [44, 76, 78, 13] },
                  ],
                }}
              />
          </Grid>

        </Grid>
      </Container>
    </>
    )
}