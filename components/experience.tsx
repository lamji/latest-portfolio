import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const exp = [
  {
    id: "01",
    exp: "Abakada",
    year: " 2022, 2023",
  },
  {
    id: "02",
    exp: "Abakada",
    year: " 2022, 2023",
  },
  {
    id: "03",
    exp: "Abakada",
    year: " 2022, 2023",
  },
  {
    id: "04",
    exp: "Abakada",
    year: " 2022, 2023",
  },
];

export default function Experience() {
  return (
    <React.Fragment>
      {exp.map((item: any) => {
        return (
          <Box key={item.id} sx={{p:2}}>
            <Typography variant="h3">{item.id}</Typography>
            <Typography variant="body1" sx={{fontSize: "12px"}}>Company: {item.exp}</Typography>
            <Typography variant="body1" sx={{fontSize: "12px"}}>Year: {item.year}</Typography>
            <Box sx={{cursor: "pointer", fontSize: "12px", mt:1, color: "blue"}}>more...</Box>
          </Box>
        );
      })}
    </React.Fragment>
  );
}
