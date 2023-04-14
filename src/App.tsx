import React from 'react';
import {useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NavBar from './Navbar';
import Transcriptions from './Transcriptions';
import NewTranscription from './NewTranscription';

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

function App() {
  const [fileUploadModalOpen, setFileUploadModalOpen] = useState(false);
  const openFileUploadModal = () => setFileUploadModalOpen(true);
  const closeFileUploadModal = () => setFileUploadModalOpen(false);

  function onFileUploaded() {
    // Notify user of file upload
  }

  return (
    <>
      <NavBar onFileUpload={openFileUploadModal} />
      <Modal
        open={fileUploadModalOpen}
        onClose={closeFileUploadModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewTranscription onFileUploaded={onFileUploaded} />
        </Box>
      </Modal>
      <main>
        <Container>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            marginTop={5}
          >
            Check existing audio transcriptions and upload new files
          </Typography>
        </Container>
        <Container sx={{ paddingTop: 5 }}>
          <Transcriptions list={[]} />
        </Container>
      </main>
    </>
  );
}

export default App;
