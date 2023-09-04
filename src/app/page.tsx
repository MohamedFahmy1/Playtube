"use client";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Videos from "@/components/Videos";
import { fetchFromAPI } from "@/utils/fetchFromApi";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState<any>([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack flexDirection={{ sx: "column", md: "row" }} component={"main"}>
      <Box
        sx={{ height: { sx: "auto", md: "92vh" } }}
        borderRight={"1px solid #3d3d3d"}
        px={{ sx: 0, md: 2 }}
        width={{ md: "130px" }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          className="copyright"
          mt={1.5}
          color={"#fff"}
        >
          All Copyright reserved 2023 &copy; &nbsp;
          <Link
            href="https://github.com/mohamedfahmy1"
            style={{ color: "red" }}
          >
            Mohamed Fahmy
          </Link>
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} color={"white"}>
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Home;
