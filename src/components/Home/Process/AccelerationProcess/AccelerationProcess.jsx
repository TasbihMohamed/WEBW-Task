import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionInfo from '../../../Common/SectionInfo/SectionInfo'
import icon5 from '../../../../assets/icon5.png'
import { processes } from "../../../../utils/data";

export default function AccelerationProcess() {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: { xs: "center", md: "start" },
                mt: { md: '150px', xs: 0 }
            }}
        >
            {/* left side  */}
            <Stack
                sx={{
                    my: 3, mb: 4,
                    width: { xs: 1, md: "50%" },
                    justifyContent: { xs: "center", md: "start" },
                    alignItems: { xs: "center", md: "start" },
                }}>
                <SectionInfo gradiantBtn={true}
                    title={'Acceleration Process to Grow Your Business'} />
            </Stack>
            {/* right side  */}

            <Stack
                sx={{ width: { xs: "80%", md: "50%" }, }}>
                {processes.map((process, index) => {
                    return (
                        <Box key={index} sx={{
                            my: 1,
                            maxWidth: '350px',
                            alignSelf: { xs: "center", md: 'start' },
                        }}>
                            <Stack direction={'row'}>
                                <Box sx={{ mr: 2, width: 1 / 4 }}>
                                    <Stack sx={{ alignItems: 'center', }}>
                                        <img src={icon5} style={{ width: '35px' }} />
                                        <Stack sx={{ mt: 2, background: "#BCBCBC", height: '50px', width: '2.5px' }}>
                                        </Stack>
                                    </Stack>
                                </Box>
                                <Stack >
                                    <Typography variant='body2'
                                        sx={{ mb: 2, color: "#3B3A3A", fontWeight: 600 }}>{process.title} </Typography>
                                    <Typography
                                        variant='small'
                                        sx={{ color: '#8F8F8F', }}>
                                        {process.info}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    )
                })}

            </Stack>
        </Stack>

    )
}
