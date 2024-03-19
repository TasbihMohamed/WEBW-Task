import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomButton({ purple, title }) {
    return (
        <>
            {
                purple ?
                    <Link
                        to="#"
                        style={{
                            background: "linear-gradient(90deg, rgba(124, 28, 128, 0.658824) 2.34%, #FF6057 99.12%)",
                            display: "inline-block",
                            padding: "7px 37px",
                            borderRadius: '10px',
                            color: 'white ',
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: '13px'
                        }
                        }
                    >
                        {title}
                    </Link >

                    : <Link
                        to="#"
                        style={{
                            background: "white",
                            display: "inline-block",
                            padding: "7px 37px",
                            borderRadius: '10px',
                            color: ' #FF6057',
                            textDecoration: "none",
                            fontWeight: 600,
                            fontSize: '13px'
                        }}
                    >
                        {title}
                    </Link>
            }
        </>

    )
}
