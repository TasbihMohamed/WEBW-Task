
import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionInfo from '../../../Common/SectionInfo/SectionInfo'
import bg3 from '../../../../assets/bg3.png'
import NoPath from '../../../../assets/NoPath.png'
import AccelerationProcess from '../AccelerationProcess/AccelerationProcess'



export default function Process() {

    return (
        <Stack sx={{
            backgroundImage: `url(${bg3})`, backgroundSize: "cover",
            backgroundRepeat: 'no-repeat'
        }}>
            <Container maxWidth="md" sx={{ my: { md: 5, xs: 0 }, }}>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    sx={{
                        mt: {md:'190px' ,xs:'80px'}, mb: '80px',
                        position: 'relative',
                        justifyContent: { xs: "center", md: "space-between" },
                        alignItems: { xs: "center", md: "start" },

                    }}>
                    {/* left side  */}
                    <Stack
                        sx={{
                            my: 3,
                            width: { xs: 1, md: "50%" },
                            justifyContent: { xs: "center", md: "start" },
                            alignItems: { xs: "center", md: "start" },
                        }}
                    >
                        <SectionInfo title={'Best Platform for the Technological Era'} />
                    </Stack>

                    {/* right side  */}

                    <Stack
                        sx={{
                            width: { xs: "80%", md: "50%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Box>
                            <img src={NoPath} alt="NoPath"
                                class='img-position'
                            />
                        </Box>
                    </Stack>

                </Stack>
                <Stack >
                    <AccelerationProcess />
                </Stack>
            </Container>

        </Stack>
    )
}
