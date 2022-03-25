var express = require('express');
var router = express.Router();
var os = require('os');

const multer  = require('multer');
const upload = multer({ dest: os.tmpdir() });

router.post('/upload', upload.single('upload'), function(req, res) {
  const title = req.body.title;
  const file = req.file;

  console.log(title);
  console.log(file);

  res.sendStatus(200);
});

module.exports = router;
