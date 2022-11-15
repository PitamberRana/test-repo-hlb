import { Box, Container } from "@mui/system";
import React from "react";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { Button, InputLabel, TextField, Typography } from "@mui/material";

const PAGE_TITLE = "mnemonic";

export default function mnemonic() {
  return (
    <Container>
      <DashboardLayout pageTitle={PAGE_TITLE}>
        <Typography variant="h4"> Let's secure your account.</Typography>
        <Typography variant="subtitle3">
          Please save this 12 word mnemonic safely.
        </Typography>
        <Box>
          <InputLabel> word 1</InputLabel>
          <TextField />
          <InputLabel> word 2</InputLabel>
          <TextField />
          <InputLabel> word 3</InputLabel>
          <TextField />
          <InputLabel> word 4</InputLabel>
          <TextField />
          <InputLabel> word 5</InputLabel>
          <TextField />
          <InputLabel> word 6</InputLabel>
          <TextField />
          <InputLabel> word 7</InputLabel>
          <TextField />
          <InputLabel> word 8</InputLabel>
          <TextField />
          <InputLabel> word 9</InputLabel>
          <TextField />
          <InputLabel> word 10</InputLabel>
          <TextField />
          <InputLabel> word 11</InputLabel>
          <TextField />
          <InputLabel> word 12</InputLabel>
          <TextField />
        </Box>
        <Button variant="contained"> Yes, I've written down</Button>
        <Button variant="outlined"> Cancel</Button>
      </DashboardLayout>
    </Container>
  );
}
