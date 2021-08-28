import { ListItemIcon, ListItemText } from "@material-ui/core";

import CropFreeIcon from "@material-ui/icons/CropFree";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    width: 175,
  },
});

interface MenuProps {
    close: Function;
}

function NavMenu(props: MenuProps){
  const classes = useStyles();
  return (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={() => {props.close()}}
      onKeyDown={() => {props.close()}}
    >
      <List>
        <ListItem component={Link} to="/" button key={"Home"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem component={Link} to="/settings" button key={"Settings"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>
        <ListItem component={Link} to="/qrcode" button key={"QR Code"}>
          <ListItemIcon>
            <CropFreeIcon />
          </ListItemIcon>
          <ListItemText primary={"QR Code"} />
        </ListItem>
        <ListItem component={Link} to="/help" button key={"Help"}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary={"Help"} />
        </ListItem>
      </List>
    </div>
  );
}

export default NavMenu;
