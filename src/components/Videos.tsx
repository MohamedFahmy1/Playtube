import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos: React.FC<{ videos: [any]; direction?: any }> = ({
  videos,
  direction,
}) => {
  if (!videos?.length) return "Loading...";
  return (
    <Stack
      direction={direction ? direction : "row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
