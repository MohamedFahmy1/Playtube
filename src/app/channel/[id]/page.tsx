"use client";
import ChannelCard from "@/components/ChannelCard";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/utils/fetchFromApi";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState<unknown>(null);
  const [videos, setVideos] = useState<any>([]);
  const path = usePathname();
  const id = path.slice(9);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              " linear-gradient(273deg, rgba(253,29,29,1) 0%, rgba(0,0,0,1) 75%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
