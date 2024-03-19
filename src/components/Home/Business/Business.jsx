import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import SectionInfo from '../../Common/SectionInfo/SectionInfo'
import icon1 from '../../../assets/icon1.png'
import icon2 from '../../../assets/icon2.png'
import icon3 from '../../../assets/icon3.png'
import icon4 from '../../../assets/icon4.png'
import CustomLine from '../../Common/CustomLine/CustomLine'

export default function Business() {

    const solutions = [{
        icon: icon1,
        title: 'Scale Your Activity'
    }, {
        icon: icon2,
        title: 'Bootcamps'
    }, {
        icon: icon3,
        title: 'Hight Quality'
    }, {
        icon: icon4,
        title: 'Get Certifcation'
    },]
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
                        <SectionInfo title={'The best business solution for you'} />
                    </Stack>
                    {/* right side  */}

                    <Stack
                        sx={{
                            // border: 2,
                            my: 1,
                            width: { xs: "80%", md: "50%" },
                            display: "flex",
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: { md: "space-between", xs: 'center' },
                            alignItems:{ md: "start", xs: 'center' },
                        }}
                    >
                        {solutions.map((item, index) => {
                            return (
                                <Box key={index} sx={{
                                    my: 1,
                                    width: '40%',
                                    display: "flex",
                                    flexDirection: 'column',
                                    justifyContent: { md: "start", xs: 'center' },
                                    alignItems:{ md: "start", xs: 'center' },

                                }}>
                                    <Box sx={{ width: "30%" }}>
                                        <img src={item.icon} style={{
                                            width: '100%'
                                        }} />
                                    </Box>
                                    <Typography
                                        sx={{ fontSize: "0.7rem !important" }}> {item.title} </Typography>
                                    <Stack sx={{ mt: 1 }}>
                                        <CustomLine small={true} />
                                    </Stack>

                                    <Typography
                                    textAlign={{md:'start' ,xs:'center'}}
                                        sx={{
                                            fontSize: "0.6rem !important",
                                            color: '#8F8F8F',
                                            width: { md: '100%', xs: '70%' },
                                        }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    </Typography>
                                </Box>
                            )
                        })}

                    </Stack>

                </Stack>
            </Container>
        </Stack>
    )
}
