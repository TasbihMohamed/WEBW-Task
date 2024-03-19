import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionInfo from '../../Common/SectionInfo/SectionInfo'
import NoPath from "../../../assets/NoPath.png";

export default function Platform() {
    return (
        <Stack>
            <Container maxWidth="md" sx={{
                my: 5, //border: 2
            }}>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                        justifyContent: { xs: "center", md: "space-between" },
                        alignItems: { xs: "center", md: "start" },
                        // border: 3,
                        borderColor: "blue",
                        position: 'relative'
                    }}
                >
                    {/* left side  */}
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
                            <img src={NoPath} alt="NoPath" 
                                class='img-left-position'
                            />
                        </Box>
                    </Stack>
             
                    <Stack
                        sx={{
                            my: 3,
                            width: { xs: 1, md: "45%" },
                            justifyContent: { xs: "center", md: "start" },
                            alignItems: { xs: "center", md: "start" },
                        }}
                    >
                        <SectionInfo title={'Best Platform for the Technological Era'} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}
