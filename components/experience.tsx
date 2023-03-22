import React from "react";
import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const exp = [
  {
    id: 0,
    name: "01",
    exp: "Abakada",
    year: " 2022, 2023",
    left: "80px",
    c: "-10px",
    y: "-15px",
    m: "-18px",
  },
  {
    id: 1,
    name: "02",
    exp: "Abakada",
    year: " 2022, 2023",
    left: "50px",
    c: "-10px",
    y: "-15px",
    m: "-18px",
  },
  {
    id: 2,
    name: "03",
    exp: "Abakada",
    year: " 2022, 2023",
    left: "30px",
    c: "-10px",
    y: "-15px",
    m: "10px",
  },
  {
    id: 3,
    name: "03",
    exp: "Abakada",
    year: " 2022, 2023",
    left: "50px",
    c: "10px",
    y: "15px",
    m: "18px",
  },
  {
    id: 4,
    name: "04",
    exp: "Abakada",
    year: " 2022, 2023",
    left: "70px",
    c: "10px",
    y: "15px",
    m: "18px",
  },

];

export default function Experience() {
  return (
    <React.Fragment>
      {exp.map((item: any) => {
        return (
          <Box key={item.id} sx={{ p: 2, paddingLeft: item.left }}>
            {item.id === 2 ? (
              <Box
                component="span"
                sx={{ marginLeft: "-20px", cursor: "pointer" }}
              >
                <Tooltip title="View more experience">
                  <TrendingFlatIcon sx={{ fontSize: "100px",  color: "#4E6E81"}} />
                </Tooltip>
              </Box>
            ) : (
              <>
                <Typography
                  variant="h3"
                  color="#4E6E81"
                  sx={{ fontWeight: 700 }}
                >
                  -{item.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", marginLeft: item.c }}
                >
                  Company: {item.exp}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", marginLeft: item.y }}
                >
                  Year: {item.year}
                </Typography>
                <Box
                  sx={{
                    cursor: "pointer",
                    fontSize: "12px",
                    mt: 1,
                    color: "blue",
                    marginLeft: item.m,
                  }}
                >
                  more...
                </Box>
              </>
            )}
          </Box>
        );
      })}
    </React.Fragment>
  );
}
