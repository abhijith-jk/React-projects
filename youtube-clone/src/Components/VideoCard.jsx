import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelUrl, demoChannelTitle, demoVideoTitle, demoVideoUrl,  demoThumbnailUrl } from '../utils/constants';

const VideoCard = ({ video: { id: {videoId}, snippet } }) => {
    
  return (
    <Card>
        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
            image={snippet.thumbnails.high.url} 
            alt={snippet.title} 
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
        />
        </Link>
    </Card>
  )
}

export default VideoCard