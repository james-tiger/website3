<?php

// Connect to the SQLite database
$db = new SQLite3('videos.db');

// Function to store video data in the SQLite database
function storeVideoData($videoData) {
  // Prepare the SQLite query to insert video data
  $sql = "INSERT INTO videos (title, description, fileName, fileUrl, viewCount) VALUES (?, ?, ?, ?, ?)";
  $stmt = $db->prepare($sql);

  // Generate a unique identifier for the video file
  $videoFileId = uniqid();

  // Store the video file URL
  $fileUrl = "uploads/" . $videoFileId . ".mp4";

  // Move the uploaded file to the designated directory
  $tempFilePath = $_FILES["video-file"]["tmp_name"];
  rename($tempFilePath, $fileUrl);

  // Bind the video data parameters to the prepared statement
  $stmt->bind_param("ssss", $videoData["title"], $videoData["description"], $videoData["fileName"], $fileUrl, 0);

  // Execute the prepared statement
  $stmt->execute();
}

// Function to fetch all videos from the SQLite database
function fetchAllVideos() {
  // Prepare the SQLite query to fetch all video data
  $sql = "SELECT * FROM videos";
  $result = $db->query($sql);

  // Fetch all video data as an array of objects
  $allVideos = [];
  while ($row = $result->fetch_assoc()) {
    $allVideos[] = $row;
  }

  // Return the list of all videos
  return $allVideos;
}

// Function to get the top x trending videos from the SQLite database
function getTrendingVideos($limit) {
  // Prepare the SQLite query to fetch the top x most viewed videos
  $sql = "SELECT * FROM videos ORDER BY viewCount DESC LIMIT $limit";
  $result = $db->query($sql);

  // Fetch the top x trending videos as an array of objects
  $trendingVideos = [];
  while ($row = $result->fetch_assoc()) {
    $trendingVideos[] = $row;
  }

  // Return the list of trending videos
  return $trendingVideos;
}
