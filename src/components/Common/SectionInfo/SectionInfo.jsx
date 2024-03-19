import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import TitleLine from '../../Home/TitleLine/TitleLine'
import { Link } from 'react-router-dom'
import CustomButton from '../../Common/CustomButton/CustomButton';
import arrowright from '../../../assets/arrowright.png'


export default function SectionInfo({ title, gradiantBtn }) {
    return (
        <Stack sx={{
            justifyContent: { xs: 'center', md: 'start' },
            alignItems: { xs: 'center', md: 'start' },
        }}>
            <TitleLine title={title} gradiantBtn={gradiantBtn} />
            <Typography
                variant='small'
                textAlign={{ md: 'start', xs: "center" }}
                sx={{
                    my: 2, color: '#8F8F8F',
                    // width: { md: '92%', xs: '70%' },
                    width: { md: '85%', xs: '80%' },
                }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata
            </Typography>
            {gradiantBtn ?
                <CustomButton purple={true} title={'About us'} /> :
                <Link
                    to="#"
                    style={{
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'center',
                        textDecoration: "none",
                        // border:1
                    }
                    }
                >
                    <Typography
                        variant='small'
                        sx={{ mr: 4, color: '#FF6057', fontWeight: 600 }}>Learn About Our Success
                    </Typography>

                    <Box>
                        <img src={arrowright} alt='arrow' />
                    </Box>
                </Link >
            }

        </Stack>
    )
}
