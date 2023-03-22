import React from "react";
import { Box, Typography } from "@mui/material";
const data = [
  {
    name: "Project 1",
    link: "/",
    tech: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    name: "Project 1",
    link: "/",
    tech: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    name: "Project 1",
    link: "/",
    tech: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    name: "Project 1",
    link: "/",
    tech: ["Html", "Css", "Bootstrap", "Javascript"],
  },
  {
    name: "Project 1",
    link: "/",
    tech: ["Html", "Css", "Bootstrap", "Javascript"],
  },
];

export default function Projects() {
  return (
    <Box >
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: "#4E6E81", textAlign: "right", mb: 3 }}
      >
        Do you want to check my personal project?
      </Typography>

      {data.map((item: any, idx: number) => {
        return (
          <Box sx={{ textAlign: "right", mt: 1 }} key={idx}>
            <Typography variant="body1" sx={{ fontSize: "12px", color:"#4E6E81"}}>
              {item.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "11px", color: "#4E6E81" }}
            >

              <Box
                component="span"
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                {item.tech.map((techs: any, id: number) => (
                  <Box
                    key={id}
                    component="span"
                    sx={{
                      fontSize: "11px",
                      color: "#4E6E81",
                      marginLeft: "5px",
                    }}
                  >
                    {techs}
                  </Box>
                ))}
              </Box>
            </Typography>
            <a href={item.link} style={{fontSize: "12px", color: 'blue'}}>Visit Now</a>
          </Box>
        );
      })}
    </Box>
  );
}
