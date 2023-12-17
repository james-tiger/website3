<?php

// Connect to the SQLite database
$db = new SQLite3('videos.db');

// Handle file upload
$videoFile = $_FILES["video-file"];

// Check if file is uploaded successfully
if ($videoFile["error"] === UPLOAD_ERR_OK) {
  // Move the uploaded file to a temporary location
  $tempFilePath = $_FILES["video-file"]["tmp_name"];
  $fileName = basename($videoFile["name"]);
  $targetFilePath = "uploads/" . $fileName;

  if (
