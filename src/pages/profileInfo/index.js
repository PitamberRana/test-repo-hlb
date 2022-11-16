import {
  Container,
  Select,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Button,
  Grid,
} from "@mui/material";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import React from "react";
import { Box } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const PAGE_TITLE = "profileInfo";

export default function ProfileInfo() {
  return (
    <Container sx={{ maxWidth: "90%" }} maxWidth={false}>
      <DashboardLayout pageTitle={PAGE_TITLE}>
        <Typography variant="h3" sx={{ mt: 2 }}>
          Register
        </Typography>
        <Typography variant="subtitle1">
          Let's get you all set up so you can verify your personal account
        </Typography>
        <Box sx={{ p: 3 }}>
          <Grid container xs={12} spacing={3}>
            <Grid item xs={10} md={7}>
              <InputLabel> Full name</InputLabel>

              <TextField
                id="fullname"
                type="text"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={3}>
              <InputLabel> Gender</InputLabel>
              <Select id="select" value="male" size="small" fullWidth>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={10} md={7}>
              <InputLabel> E-mail</InputLabel>
              <TextField
                id="email"
                type="text"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={7}>
              <InputLabel> Date of Birth</InputLabel>
              <TextField id="dob" type="date" size="small" fullWidth />
            </Grid>
            <Grid item xs={10} md={3}>
              <InputLabel> Blood Group </InputLabel>
              <Select id="select" value="A+" size="small" fullWidth>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={10} md={7}>
              <InputLabel> Phone number</InputLabel>
              <TextField
                id="phone"
                type="number"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} md={7}>
              <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </Container>
  );
}
