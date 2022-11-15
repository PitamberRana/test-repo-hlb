import { Box, Container } from "@mui/system";
import React from "react";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";

const PAGE_TITLE = "mnemonic";

export default function mnemonic() {
  return (
    <Container>
      <DashboardLayout pageTitle={PAGE_TITLE}>
        <Typography variant="h3"> Let's secure your account.</Typography>
        <Typography variant="subtitle3">
          Please save this 12 word mnemonic safely.
        </Typography>
        <Box sx={{ p: 3 }}>
          <Grid container xs={12} spacing={2}>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 1</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 2</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 3</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 4</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 5</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 6</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 7</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 8</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 9</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 10</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 11</InputLabel>
              <TextField size="small" />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <InputLabel> word 12</InputLabel>
              <TextField size="small" />
            </Grid>
          </Grid>
          <Box pt={5}>
            <Grid container xs={12} spacing={2}>
              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth>
                  {" "}
                  Yes, I've written down
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button variant="outlined" fullWidth>
                  {" "}
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DashboardLayout>
    </Container>
  );
}
