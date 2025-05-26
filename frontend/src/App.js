import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setError('Please enter some text to analyze');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await axios.post('http://localhost:5000/api/analyze', {
        text: text
      });
      setResult(response.data);
    } catch (err) {
      setError('Error analyzing sentiment. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return '#4caf50';
      case 'negative':
        return '#f44336';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Sentiment Analysis
        </Typography>
        
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            label="Enter text to analyze"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mb: 2 }}
          />
          
          <Button
            variant="contained"
            color="primary"
            onClick={analyzeSentiment}
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Analyze Sentiment'}
          </Button>
        </Paper>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {result && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Analysis Result
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1">
                Sentiment: 
                <span style={{ 
                  color: getSentimentColor(result.sentiment),
                  marginLeft: '8px',
                  fontWeight: 'bold'
                }}>
                  {result.sentiment.toUpperCase()}
                </span>
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Detailed Scores:
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography>
                  Positive: {(result.scores.positive * 100).toFixed(1)}%
                </Typography>
                <Typography>
                  Neutral: {(result.scores.neutral * 100).toFixed(1)}%
                </Typography>
                <Typography>
                  Negative: {(result.scores.negative * 100).toFixed(1)}%
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle1">
              Compound Score: {result.compound_score.toFixed(3)}
            </Typography>
          </Paper>
        )}
      </Box>
    </Container>
  );
}

export default App; 