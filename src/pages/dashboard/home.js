// next
import Head from 'next/head';
import { Container, Typography, Grid} from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/DashboardLayout';

import { WeeklySummaryWidget } from '../../sections/';

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
            <WeeklySummaryWidget title="Weekly Commits" total={714000}  />
          </Grid>
        </Grid>
      </Container>
    </>
    )
}