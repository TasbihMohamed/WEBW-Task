import { Box, Stack } from '@mui/material';
import React from 'react';
import client1 from '../../../assets/client-1.png';
import client2 from '../../../assets/client-2.png';
import client3 from '../../../assets/client-3.png';
import client4 from '../../../assets/client-4.png';
import client5 from '../../../assets/client-5.png';

const clients = [client1, client2, client3, client4, client5];

export default function ImagesList() {
    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            {clients.map((client, index) => (
                <Box sx={{ width: { md: 1 / 10, xs: '15% ' } }} key={index}>
                    <img
                        src={client}
                        alt={`client${index + 1}`}
                        style={{
                            width: '100%'
                        }}
                    />
                </Box>
            ))}
        </Stack>
    );
}