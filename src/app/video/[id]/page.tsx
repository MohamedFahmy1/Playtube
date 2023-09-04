"use client";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState<any>([]);
  const [videos, setVideos] = useState<any>([]);
  const pathname = usePathname();
  const id = pathname.slice(7);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) {
    return "Loading...";
  }
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`http://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography variant="h5" color="#fff" p={2} fontWeight={"bold"}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              color={"#fff"}
              py={1}
              px={2}
            >
              <Link href={`/channel/${channelId}`}>
                <Typography variant={"h6"} color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos
            videos={videos}
            description="Related Videos:"
            direction="column"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
