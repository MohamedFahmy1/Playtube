"use client";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { fetchFromAPI } from "@/utils/fetchFromApi";
import Videos from "@/components/Videos";
import { usePathname } from "next/navigation";

const SearchFeed = () => {
  const [videos, setVideos] = useState<any>([]);

  const pathname = usePathname();
  const searchTerm = pathname.slice(8);
  console.log(searchTerm);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=dantes`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
