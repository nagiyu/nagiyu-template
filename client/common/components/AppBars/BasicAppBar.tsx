import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

function getJustifyContent(align: 'left' | 'center' | 'right'): string {
    switch (align) {
        case 'center':
            return 'center';
        case 'right':
            return 'flex-end';
        case 'left':
        default:
            return 'flex-start';
    }
}

export default function BasicAppBar(props: { align?: 'left' | 'center' | 'right'; children?: React.ReactNode }) {
    const { align = 'left', children } = props;
    const justifyContent = getJustifyContent(align);

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent }}>
                {children}
            </Toolbar>
        </AppBar>
    );
}
