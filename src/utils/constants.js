export const YOUTUBE_VIDEOS_API =  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q="

export const YOUTUBE_VIDEO_METADAT_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&id="

export const YOUTUBE_VIDEO_COMMENT = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&videoId="

export const YOUTUBE_SEARCH_QUERY = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&q="

var nameList = [
  "John Doe",
  "Emily Smith",
  "David Johnson",
  "Sophia Anderson",
  "Michael Wilson",
  "Emma Davis",
  "Daniel Taylor",
  "Olivia Brown",
  "Matthew Thomas",
  "Ava Martinez",
  "James Anderson",
  "Isabella Thompson",
  "William Garcia",
  "Mia Robinson",
  "Alexander Clark",
  "Charlotte Wright",
  "Joseph Walker",
  "Abigail Rodriguez",
  "Samuel Hill",
  "Elizabeth Scott",
];

export const getRandomNamegenerator = () => {
   return nameList[Math.floor( Math.random() * nameList.length )];   
};

const randomMessages = [
  "Great video! Really enjoyed it.",
  "This is so helpful. Thanks for sharing!",
  "Can you make a tutorial on this topic?",
  "I've been struggling with this. Your video saved me!",
  "Awesome content. Keep up the good work!",
  "I have a question about this part. Can you explain it further?",
  "This video changed my perspective. Thank you!",
  "Wow, I didn't know about this before. Learned something new today!",
  "I've been binge-watching your videos. They're amazing!",
  "Could you recommend more resources on this subject?",
  "Your explanation was crystal clear. Thank you!",
  "I tried implementing this and it worked like a charm!",
  "I'm sharing this video with all my friends. It's a must-watch!",
  "Can you do a live session on this topic?",
  "I wish I had found this video sooner. It would have saved me a lot of time.",
];

// Get a random message from the array
export const getRandomMessage = () => {
    return randomMessages[Math.floor(Math.random() * randomMessages.length)]; 
}

export const LIVE_CHAT_OFFSET = 10