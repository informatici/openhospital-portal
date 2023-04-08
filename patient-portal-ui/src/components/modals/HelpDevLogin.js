import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function HelpDevLogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <IconButton onClick={handleOpen}
        variant="outlined"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <HelpIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="h6" gutterBottom>
              (DEV) Ambienti di riferimetno
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Inserendo una delle seguenti email si accede direttamente all'ambiente di riferimento.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Admin: a@a.com
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Administration: as@a.com
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Doctor: d@a.com
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Patient: p@a.com
            </Typography>
            <Typography variant="caption" display="block">
              La password può essere qualsiasi cosa tranne una stringa vuota
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}