import React from "react";
import { Stack, Typography, Container, Box, TextField } from "@mui/material";
import { AccountCircle } from "@material-ui/icons";

export default function Footer() {
    return (
        <Stack sx={{ backgroundColor: "#333333", }}>
            <Container maxWidth="md">
                <Stack
                    direction={{
                        md: "row",
                        xs: "column",
                    }}
                    sx={{
                        marginY: "8%",
                        justifyContent: "space-around",
                        alignItems: { md: "start", xs: "center" },
                    }}
                >
                    {/* 1st col */}
                    <Stack
                        sx={{
                            flex: 1, mr: 1, mb: { md: 0, xs: 5 }, alignItems: { md: "start", xs: "center" },
                        }}>
                        <Typography
                            textAlign={{ md: 'start', xs: "center" }}
                            variant="h3"
                            sx={{
                                color: "white",
                                fontWeight: 400, mb: 1
                            }}
                        >
                            Study
                        </Typography>
                        <Typography
                            textAlign={{ md: 'start', xs: "center" }}
                            sx={{
                                color: "white",
                                my: 1, width: { md: '100%', xs: '70%' }
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin
                        </Typography>

                    </Stack>


                    <Stack
                        sx={{
                            flex: 1, mr: 1, mb: { md: 0, xs: 5 }, alignItems: { md: "start", xs: "center" },

                        }}
                    >
                        <Typography
                            variant="body2"
                            textAlign={{ md: 'start', xs: "center" }}
                            sx={{
                                color: "white",
                                // fontSize: 27,
                                fontWeight: 700, mb: 3
                            }}
                        >
                            Nos services

                        </Typography>
                        <Typography
                            textAlign={{ md: 'start', xs: "center" }}
                            sx={{
                                color: "white",
                                my: 1, width: { md: '100%', xs: '70%' }
                            }}
                        >
                            Avis clients
                            Mentions légales
                            Plan du site
                            Blog d’Idéematic
                            Le dictionnaire du digital
                            ‹ Notre boutique /›
                        </Typography>

                    </Stack>
                    <Stack
                        sx={{
                            flex: 1, alignItems: { md: "start", xs: "center" },
                        }}
                    >
                        <Typography
                            variant="body2"
                            textAlign={{ md: 'start', xs: "center" }}
                            sx={{
                                color: "white",
                                // fontSize: 27,
                                fontWeight: 700, mb: 3
                            }}
                        >
                            Sign up for Special Offers!

                        </Typography>
                        <Stack>
                            <Box sx={{
                                position: 'relative', display: 'flex',
                                alignItems: 'flex-start', height: "38px", width: '300px'
                            }}>
                                <input id="input-with-sx" placeholder="Mail" variant="standard"
                                    style={{
                                        border: '3px solid white',
                                        paddingLeft: '16px',
                                        width: '100%', height: "38px", borderRadius: 20, backgroundColor: 'white'
                                    }} >
                                </input>

                                <button
                                    style={{
                                        position: 'absolute', right: 0, top: "1.5px",
                                        border: '3px solid white',
                                        width: "122px",
                                        height: "42px", borderRadius: 20,
                                        background: "#FF6057", color: "white"
                                    }}>Subscribe</button>

                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

        </Stack>
    );
}
