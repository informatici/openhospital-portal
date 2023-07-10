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
export default function GraphicCredits() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography variant="overline" onClick={handleOpen}>
      	Credits for graphics
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography variant="subtitle1" gutterBottom>
              Patient Portal (ui) graphics:
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Respiratory Rate: <a href="https://www.freepik.com/free-vector/breathing-exercise-concept-illustration_28205234.htm#&position=0&from_view=collections">Image by storyset</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Heart Rate: <a href="https://www.freepik.com/free-vector/red-heartbeat-symbol-graphic-illustration_2631302.htm#&position=4&from_view=collections#position=4">Image by rawpixel.com</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Glicemy: Image by <a href="https://www.freepik.com/free-vector/diabetes-blood-test-with-flat-design_2621079.htm#&position=9&from_view=collections">Freepik</a>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Weight: <a href="https://www.freepik.com/free-vector/mediterranean-diet-abstract-concept-illustration-healthy-diet-program-mediterranean-menu-nutrition-plan-home-cooking-organic-food-fresh-ingredient-shopping-list_12146004.htm#&position=5&from_view=collections">Image by vectorjuice</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Height: <a href="https://www.freepik.com/free-vector/healthy-lifestyle-icons-collection_1006435.htm#query=lifestyle&position=49&from_view=author">Image by macrovector</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Diuresis: <a href="https://www.freepik.com/free-vector/illustration-blood-donation_2606907.htm#&position=8&from_view=collections">Image by rawpixel.com</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Diuresis Vol: <a href="https://www.freepik.com/free-vector/illustration-blood-donation_2606907.htm#&position=8&from_view=collections">Image by rawpixel.com</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Saturation: <a href="https://www.freepik.com/free-vector/digital-healthcare-technology-elements-characters-set_6345812.htm#&position=2&from_view=collections">Image by macrovector</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Temperature: <a href="https://www.freepik.com/free-vector/digital-health-icons-flat-set_4407661.htm#&position=1&from_view=collections">Image by macrovector_official</a> on Freepik
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Blood Pressure: Image by <a href="https://www.freepik.com/free-vector/hand-drawn-world-hypertension-day-illustration_13184252.htm#query=hypertension&position=12&from_view=search&track=sph">Freepik</a>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
