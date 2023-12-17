const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

const upload = multer({ storage: storage });

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle file uploads
app.post('/uploadMedia', upload.fields([{ name: 'videoFile', maxCount: 1 }, { name: 'imageFile', maxCount: 1 }]), (req, res) => {
  const videoPath = req.files['videoFile'][0].path;
  const imagePath = req.files['imageFile'][0].path;
  const mediaName = req.body.mediaName;

  // Process the uploaded files and send a response
  // You can save paths or other information in your database here

  res.json({
    success: true,
    videoPath: '/' + videoPath,
    imagePath: '/' + imagePath
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
