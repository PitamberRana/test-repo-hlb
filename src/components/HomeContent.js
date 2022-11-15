import { Button, Typography } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";

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

      <Button
        variant="contained"
        sx={{ marginTop: 2, marginBottom: 2, width: 335 }}
        onClick={handleCreateWallet}
      >
        Create new wallet
      </Button>
      <hr />
      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        Restore existing wallet from
      </Typography>
      <div>
        <Button
          sx={{
            marginTop: 2,
            width: 335,
            border: 1,
            color: "common.black",
          }}
          onClick={handleRestoreWallet}
        >
          Seed phrase
        </Button>
      </div>
      <div>
        <Button
          sx={{
            marginTop: 2,
            width: 335,
            border: 1,
            color: "common.black",
          }}
          onClick={handleRestoreWallet}
        >
          Google drive
        </Button>
      </div>
    </Container>
  );
}
