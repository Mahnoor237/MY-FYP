const Sentiment = require('sentiment');
const sentiment = new Sentiment();

function analyzeSentiment(text) {
  const result = sentiment.analyze(text);
  console.log("Sentiment Analysis Result:", result); // Add this line for debugging
  return result;
  
}

module.exports = analyzeSentiment;
