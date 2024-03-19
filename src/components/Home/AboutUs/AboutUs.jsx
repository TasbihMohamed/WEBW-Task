import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../Common/CustomButton/CustomButton";
import NoPath from "../../../assets/NoPath.png";
import ImagesList from "../ImagesList/ImagesList";

export default function AboutUs() {
    return (
        <Stack>
            <Container maxWidth="md" sx={{
                my: 5,
                mt: { md: '80px', xs: 2 }
            }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                        justifyContent: { xs: "center", md: "space-between" },
                        alignItems: "center",
                        position: 'relative'
                    }}
                >
                    {/* left side  */}
                    <Stack
                        sx={{
                            my: 3,
                            width: { xs: 1, md: "50%" },
                            justifyContent: { xs: "center", md: "start" },
                            alignItems: { xs: "center", md: "start" },
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ color: "white", fontWeight: 500 }}
                        >
                            Advanced Platform
                        </Typography>
                        <Typography
                            variant="h3"
                            textAlign={{ md: 'start', xs: 'center' }}
                            sx={{
                                width: { md: '80%', xs: '90%' },
                                my: 1,
                                color: "white",
                                fontWeight: 900,

                            }}
                        >
                            Take your team to the next   <span className="colorful"> level    </span>
                        </Typography>
                        <Typography
                            textAlign={{ md: 'start', xs: 'center' }}
                            variant="body2" sx={{ width: { md: '85%', xs: '90%' }, color: "white" }}>
                                <span className="colorful">
                                Lorem ipsum dolor sit amet, consetetur  sadipscing elitr, sed diam
                                nonumy eirmod</span>
                        </Typography>
                        <Box sx={{ my: 2, mt: 3 }}>
                            <CustomButton title={"About us"} />
                        </Box>
                    </Stack>
                    {/* right side  */}

                    <Stack
                        sx={{
                            // border: 2,
                            width: { xs: "80%", md: "50%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <img src={NoPath} alt="NoPath" id="first-section"
                                class='img-position'
                            />
                        </Box>
                    </Stack>
                </Stack>
            </Container >
            <Stack sx={{
                my: 2, mt: { md: '100px', xs: 2 }
            }}>
                <ImagesList />
            </Stack>
        </Stack >
    );
}
