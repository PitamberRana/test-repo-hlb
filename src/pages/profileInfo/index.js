import {
  Container,
  Select,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import React from "react";
import { Box } from "@mui/system";

const PAGE_TITLE = "profileInfo";

export default function ProfileInfo() {
  return (
    <Container sx={{ maxWidth: "90%" }} maxWidth={false}>
      <DashboardLayout pageTitle={PAGE_TITLE}>
        <Typography variant="h3" sx={{ mt: 2 }}>
          Let's register for donation
        </Typography>
        <Box sx={{ p: 2 }}>
          <InputLabel> Full name</InputLabel>
          <TextField
            id="fullname"
            type="text"
            size="small"
            fullWidth
            sx={{ mb: 1 }}
          />

          <InputLabel> Gender</InputLabel>
          <Select
            id="select"
            value="male"
            size="small"
            fullWidth
            sx={{ mb: 1 }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>

          <InputLabel> E-mail</InputLabel>
          <TextField
            id="email"
            type="text"
            size="small"
            fullWidth
            sx={{ mb: 1 }}
          />

          <InputLabel> Phone number</InputLabel>
          <TextField
            id="phone"
            type="number"
            size="small"
            fullWidth
            sx={{ mb: 1 }}
          />

          <InputLabel> Blood Group </InputLabel>
          <Select id="select" value="A+" size="small" fullWidth sx={{ mb: 1 }}>
            <MenuItem value="A+">A+</MenuItem>
            <MenuItem value="A-">A-</MenuItem>
            <MenuItem value="B+">B+</MenuItem>
            <MenuItem value="B-">B-</MenuItem>
            <MenuItem value="O+">O+</MenuItem>
            <MenuItem value="O-">O-</MenuItem>
            <MenuItem value="AB+">AB+</MenuItem>
            <MenuItem value="AB-">AB-</MenuItem>
          </Select>

          <InputLabel> Date of Birth</InputLabel>
          <TextField id="dob" type="text" size="small" fullWidth />

          <Button variant="contained" sx={{ mt: 3 }} fullWidth>
            Submit
          </Button>
        </Box>
      </DashboardLayout>
    </Container>
  );
}
