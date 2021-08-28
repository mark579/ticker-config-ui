import { Box, Button, Chip, Switch, TextField, Typography } from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { useEffect } from "react";
import { useState } from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

function Settings() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [selectedCoins, setSelectedCoins] = useState<Coin[]>([]);
  const [tellJokes, setTellJokes] = useState(false);

  useEffect(loadCoins, []);

  function loadCoins() {
    fetch("/api/coins")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data["coins"]);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoins([]);
      });
  }

  function addCoin(coin: Coin | null) {
    if (coin && selectedCoins.indexOf(coin) === -1) {
      setSelectedCoins(selectedCoins.concat(coin));
    }
  }

  function removeCoin(coin: Coin) {
    let coins = [...selectedCoins];
    coins.splice(coins.indexOf(coin), 1);
    setSelectedCoins(coins);
  }

  function saveSettings(){
    let config = {
      "tell_jokes":tellJokes,
      "vs_currency":"usd",
      "crypto": selectedCoins.map((coin) => coin.id) 
    }
    console.log(config);
  }

  return (
    <>
      <Box p={2}>
        <Typography variant="h4">Settings</Typography>
        Change the settings for your ticker here.
        <Box pt={2}>
          After settings are saved they will take effect on the next cycle of
          the ticker.
        </Box>
      </Box>
      <Box p={2}>
        <Box pb={2}>
          <Typography variant="h5">Tell Jokes</Typography>
          If selected a random Joke will scroll across the screen at the end of
          each cycle.
        </Box>
        <Box>
          Tell Jokes:
          <Switch
            checked={tellJokes}
            color="primary"
            name="tellJokes"
            onChange={() => {
              setTellJokes(!tellJokes);
            }}
          />
        </Box>
      </Box>
      <Box p={2}>
        <Box pb={2}>
          <Typography variant="h5">Crypto Currencies</Typography>
          Select the cryptocurrencies you would like to cycle through. The order
          shown is the order they will display in.
        </Box>
        <Box pb={2}>
          <Autocomplete
            selectOnFocus
            clearOnBlur
            blurOnSelect
            id="cryptocurrencies"
            options={coins}
            getOptionLabel={(coin) => coin["name"]}
            renderInput={(params) => (
              <TextField {...params} label="Select Crypto" variant="outlined" />
            )}
            onChange={(e, value) => {
              addCoin(value);
            }}
          />
        </Box>
        <Box pb={2}>
          {selectedCoins.map((coin: Coin) => {
            return (
              <Chip
                label={coin.name}
                key={coin.symbol}
                onDelete={(_) => {
                  removeCoin(coin);
                }}
              />
            );
          })}
        </Box>
      </Box>
      <Box p={2}>
        <Button onClick={saveSettings} variant="contained" color="primary">Save</Button>
      </Box>
    </>
  );
}

export default Settings;
