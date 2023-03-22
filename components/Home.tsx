import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import Experience from "./experience";
import Projects from "./projects";

const images = [
  {
    img: "/React-icon.png",
    name: "React Js",
    exp: "React.js 3 years of experience",
  },
  {
    img: "/mui.png",
    name: "Material UI",
    exp: "Material UI 3 years of experience",
  },
  {
    img: "/next-js.png",
    name: "Next Js",
    exp: "Next.js 3 years of experience",
  },
  {
    img: "/js.png",
    name: "Javascript",
    exp: "Vanilla js 5 years of experience",
  },
  {
    img: "/js.png",
    name: "Redux",
    exp: "Redux 5 years of experience",
  },
  {
    img: "/js.png",
    name: "Axios",
    exp: "Axios 3 years of experience",
  },
  {
    img: "/js.png",
    name: "Axios",
    exp: "Axios 3 years of experience",
  },
];

export default function HomePage() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
    
        height: "90vh",
        width: {
          md: "80%",
          xs: "100%",
        },
        margin: "0 auto",
      }}
    >
      <Grid item xs={12} md={3}>
        <Experience />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          textAlign: "center",
          padding: "20px",
          borderRadius: 2,
          minHeight: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Image
              src="/images.jpg"
              alt="Next.js Logo"
              width={200}
              height={200}
              priority
            />
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", marginLeft: 3, fontWeight: 700 }}
            >
              FRONT END DEVELOPER
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: 3, textAlign: "left" }}
            >{`I'm Jick Lampago`}</Typography>
          </Box>
        </Box>
        {/* <Typography variant="body1" sx={{ fontSize: "12px", mt: 5  }}>
            Main tools
          </Typography> */}
        <Box
          sx={{ textAlign: "center", width: "90%", margin: "0 auto", mt: 4 }}
        >
          <Grid
            container
            spacing={2}
            sx={{ mt: 2, background: "#2e414c", p: 1, borderRadius: 2 }}
          >
            {images.map((item: any, idx: number) => {
              return (
                <Grid key={idx} sx={{ marginLeft: "5px", p: "5px 10px" }}>
                  <Tooltip title={item.exp}>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "12px", color: "#fff" }}
                    >
                      {item.name}
                    </Typography>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
          <Typography variant="body1" sx={{fontSize: "12px", mt: 2,}}>
            Hello, my name is Jick Lampago and I am a front-end developer. I
            have been working in this field since 2018 and have gained expertise
            in React, one of the most popular front-end development frameworks.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={2}>
        <Projects />
      </Grid>
    </Grid>
  );
}
