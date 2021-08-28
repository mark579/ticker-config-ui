import { Box, Button, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <Box p={1}>
        <Typography variant="h4">Welcome</Typography>
      </Box>
      <Box p={1}>
        Only share this link with others that you would like to make changes to
        your ticker. The link is unique to your Ticker. Anyone who has this link can change the settings for your ticker. 
      </Box>
      <Box p={1}>
        <Typography variant="h5">Setup</Typography>
      </Box>
      <Box p={1}>
        <Typography>
          Need help getting your Ticker Setup for the first time? Visit the help page for step by step instructions to get setup.
        </Typography>
        <Button component={Link} to="/help"  variant="contained" color="secondary">
          Help
        </Button>
      </Box>
      <Box p={1}>
        <Typography variant="h5">Configure</Typography>
      </Box>
      <Box p={1}>
        <Typography>
          Visit the settings page to pick which Cryptocurrencies you want to display on your ticker, in addition to other settings. 
        </Typography>
        <Button component={Link} to="/settings" variant="contained" color="secondary">
          Settings
        </Button>
      </Box>
    </>
  );
}

export default Welcome;
