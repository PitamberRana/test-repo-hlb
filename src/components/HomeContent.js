import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { Icon } from "@iconify/react";

const handleCreateWallet = () => {
  return console.log("Created");
};

const handleRestoreWallet = () => {
  return console.log("Restored");
};

export default function HomeContent() {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginTop: 5 }}>
        Let's setup your wallet.
      </Typography>
      <Box sx={{ border: 0.1, p: 2, borderRadius: 1 }}>
        <Button
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          fullWidth
          onClick={handleCreateWallet}
        >
          <Icon
            icon="fluent:wallet-credit-card-24-filled"
            height={30}
            width={40}
          />
          Create new wallet
        </Button>
      </Box>
      <hr />
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Restore existing wallet from
      </Typography>
      <Box
        sx={{
          border: 0.1,
          p: 2,
          borderRadius: 1,
        }}
      >
        <Button
          sx={{
            mt: 2,
            border: 1,
            color: "common.black",
          }}
          fullWidth
          onClick={handleRestoreWallet}
        >
          <Icon icon="bi:file-earmark-text-fill" height={30} width={40} />
          Seed phrase
        </Button>

        <Button
          sx={{
            mt: 2,
            border: 1,
            color: "common.black",
          }}
          fullWidth
          onClick={handleRestoreWallet}
        >
          <Icon icon="ant-design:google-square-filled" height={30} width={40} />
          Google drive
        </Button>
      </Box>
    </Container>
  );
}
