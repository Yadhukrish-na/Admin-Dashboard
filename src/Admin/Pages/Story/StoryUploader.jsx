import Grow from '@mui/material/Grow';
import React, { useState } from 'react';
import {
  Box, Button, Card, CardContent, CardMedia,
  Grid, TextField, Typography, IconButton, Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';


function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const datePart = date.toLocaleDateString(undefined, options); // e.g., "Jun 20, 2025"
  const timePart = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  }); // e.g., "03:30 PM"
  return `${datePart} - ${timePart}`;
}


const StoryUploader = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [stories, setStories] = useState([]);

  const handlePost = () => {
    if (!file) return alert('Please select a file.');

    const newStory = {
      id: Date.now(),
      src: URL.createObjectURL(file),
      caption,
      type: file.type.startsWith('video') ? 'video' : 'image',
      time: formatDate(new Date()),
    };

    setStories([newStory, ...stories]);
    setFile(null);
    setCaption('');
    document.getElementById("fileInput").value = "";
  };

  const handleDelete = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  return (

    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>📤 Post a Story</Typography>
        <input
          type="file"
          id="fileInput"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          fullWidth
          label="Caption"
          variant="outlined"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          sx={{ my: 2 }}
        />
        {file && (
  <Box sx={{ my: 2 }}>
    <Typography variant="subtitle1">🔍 Preview:</Typography>
    {file.type.startsWith('image') ? (
      <CardMedia
        component="img"
        height="200"
        image={URL.createObjectURL(file)}
        alt="preview"
        sx={{ mb: 1 }}
      />
    ) : (
      <CardMedia
        component="video"
        height="200"
        controls
        src={URL.createObjectURL(file)}
        sx={{ mb: 1 }}
      />
    )}
    {caption && (
      <Typography variant="body2" color="textSecondary">
        {caption}
      </Typography>
    )}
  </Box>
)}

        <Button
          variant="contained"
          color="primary"
          onClick={handlePost}
          sx={{ backgroundColor: '#D81B60', '&:hover': { backgroundColor: '#AD1457' } }}
        >
          Post
        </Button>
      </Paper>

      <Typography variant="h6" gutterBottom>🗂️ Stories</Typography>
      
      <Grid container spacing={2}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <Grow in={true} timeout={1000}>
            <Card sx={{
    position: 'relative',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.03)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  cursor: 'pointer',
    },
  }}>
              {story.type === 'image' ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={story.src}
                  alt="story"
                />
              ) : (
                <CardMedia
                  component="video"
                  height="200"
                  controls
                  src={story.src}
                />
              )}
              
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {story.caption || 'No caption'}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                   Posted: {story.time}
                </Typography>
                <IconButton onClick={() => handleDelete(story.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
    </div>
  );
};

export default StoryUploader;
