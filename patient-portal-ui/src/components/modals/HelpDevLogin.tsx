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
            <Typography variant="h6" gutterBottom>
              (DEV) Ambienti di riferimento
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Inserendo una delle seguenti email si accede direttamente all'ambiente di riferimento.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              admin@patientportal.isf.org		admin				
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              hospital.admin@ermail.com		hospadmin2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              doctor@email.com			doctor2023			
            </Typography>

            <Typography variant="subtitle2" gutterBottom>
              justin.frederick@email.com		justin2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              anthon.geremy@email.com			anthon2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              veronique.fountain@email.com		veronique2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              cypher.marica@email.com			cypher2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              serena.levinson@email.com		serena2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              bardsley.zenaida@email.com		bardsley2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              graney.almedan@email.com		graney2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              ackman.sammy@email.com			ackman2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              pohlman.margot@email.com		pohlman2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              jeana.bennett@email.com			jeana2023			
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              abramo.oliver@email.com			abramo2023			
            </Typography>

          </div>
        </Box>
      </Modal>
    </div>
  );
}










