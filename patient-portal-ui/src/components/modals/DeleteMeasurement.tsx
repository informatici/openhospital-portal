import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
      <HelpIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Inserendo una delle seguenti credenziali si accede direttamente all'ambiente di riferimento.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Admin:    admin@patientportal.isf.org        admin
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Hospital Admin:    admin@ermail.com        hospadmin2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Doctor:    doctor@email.com            doctor2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Justin Frederick:    701010        justin2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Anthon Geremy:       701011        anthon2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Veronique Fountain:  701012        veronique2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Cypher Marica:       701013            cypher2023
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Serena Levinson:     701014        serena2023
            </Typography>

          </div>
        </Box>
      </Modal>
    </div>
  );
}










