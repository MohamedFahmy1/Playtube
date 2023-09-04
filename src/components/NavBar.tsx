import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "@/utils/constants";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <Stack
      direction={"row"}
      p={2}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      justifyContent={"space-between"}
      bgcolor={"black"}
    >
      <Link href="/">
        <Stack direction={"row"} alignItems={"center"}>
          <Image src={logo} alt="logo" height={45} width={45} />
          <Typography
            variant={"h5"}
            color="white"
            ml={1}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Playtube
          </Typography>
        </Stack>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
