import { Stack } from "@mui/material";
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
    >
      <Link href="/">
        <Image src={logo} alt="logo" height={45} width={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default NavBar;
