import React from "react";
import Link from "next/link";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "@/utils/constants";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
const VideoCard: React.FC<any> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "356px",
          md: "320px",
        },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={`${snippet?.thumbnails?.high?.url}`}
          aria-label={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" color="#fff" fontWeight={"bold"}>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            href={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="gray" fontWeight={"bold"}>
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
