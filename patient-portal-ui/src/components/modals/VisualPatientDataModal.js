import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Oname from "../utility/patient/registry_data/output_data/Oname";
import Oage from "../utility/patient/registry_data/output_data/Oage";
import Osex from "../utility/patient/registry_data/output_data/Osex";
import Oadress from "../utility/patient/registry_data/output_data/Oadress";
import Otemperature from "../utility/patient/analyses_data/output_data/Otemperature";
import Oheart_rate from "../utility/patient/analyses_data/output_data/Oheart_rate";
import Osaturation from "../utility/patient/analyses_data/output_data/Osaturation";
import Otelephone from "../utility/patient/registry_data/output_data/Otelephone";
import Ohgt from "../utility/patient/analyses_data/output_data/Ohgt";
import Oascultation from "../utility/patient/analyses_data/output_data/Oascultation";
import Orespiration_rate from "../utility/patient/analyses_data/output_data/Orespiration_rate";
import Odiuresis_vol_24h from "../utility/patient/analyses_data/output_data/Odiuresis_vol_24h";
import Obowel from "../utility/patient/analyses_data/output_data/Obowel";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from "../common/buttons/Logout";




import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


export default function VisualPatientDataModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   overflowY: "scroll",
  //   boxShadow: 24,
  //   maxHeight: "90%",
  //   p: 4,
  // };

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{marginTop: "50px", maxHeight: "90%", width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ p: 1 }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
          <Oname />
        </Stack>
        <Divider />
        <Oage />
        <Osex />
        <Divider />
        <Oadress />
        <Otelephone />
      </List>
      <List alignItems="center" sx={{ m: 1 }}>
        <Divider />
        <Logout />
      </List>
    </Box>
  );
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button startIcon={<AccountCircleIcon />} color="inherit" sx={{ width: 1, }} onClick={toggleDrawer(anchor, true)}>{anchor} Profile</Button>
          <SwipeableDrawer
            sx={{  }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}