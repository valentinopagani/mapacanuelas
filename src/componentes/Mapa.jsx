import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";

function Mapa() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="container-mapa">
        <div className="ala-izquierda-arriba">
          <span className="lote1" onClick={handleOpen}>
            1
          </span>
          <span className="lote2" onClick={handleOpen}>
            2
          </span>
          <span className="lote3" onClick={handleOpen}>
            3
          </span>
          <span className="lote4" onClick={handleOpen}>
            4
          </span>
          <span className="lote5" onClick={handleOpen}>
            5
          </span>
          <span className="lote6" onClick={handleOpen}>
            6
          </span>
          <span className="lote7" onClick={handleOpen}>
            7
          </span>
          <span className="lote8" onClick={handleOpen}>
            8
          </span>
          <span className="lote9" onClick={handleOpen}>
            9
          </span>
          <span className="lote10" onClick={handleOpen}>
            10
          </span>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Manzana x - Lote x
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Mapa;
