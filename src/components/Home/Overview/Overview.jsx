import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionInfo from '../../Common/SectionInfo/SectionInfo'
import NoPath from "../../../assets/NoPath.png";
import Carousel from '../../Common/Carousel/Carousel';

export default function Overview() {
    return (
        <Stack>
            <Container maxWidth="md" sx={{
               mt: 5,
            }}>
                <Stack
                    direction="column"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        // border: 3,
                        borderColor: "blue",
                    }}
                >
                    <Typography variant='h5' sx={{ color: "#8F8F8F", fontWeight: 600 }}>Advanced Customer Service Platform</Typography>
                    <Typography variant='h3' sx={{ my: 2, color: "#3B3A3A", fontWeight: 700 }}>Platform Overview</Typography>

                    <Typography variant='small' sx={{
                        color: "#8F8F8F",
                        fontWeight: 600, width: { xs: '90%', md: "70%" },
                        textAlign: "center",

                    }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</Typography>
                </Stack>
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    sx={{ mt: 4, width: '90%' }}
                >
                    <Carousel image={true} />
                </Stack>

            </Container>
        </Stack>
    )
}
