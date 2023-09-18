import React from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {
    Container,
    Grid,
    Link,
    Typography,
    Box,
    makeStyles,
} from '@mui/material';

const footerMarketPlace = [
    { name: 'Item 1', link: '/item1' },
    { name: 'Item 2', link: '/item2' },
    // Add more items as needed
];

const footerResource = [
    { name: 'Resource 1', link: '/resource1' },
    { name: 'Resource 2', link: '/resource2' },
    // Add more resources as needed
];

const footerCompany = [
    { name: 'Company 1', link: '/company1' },
    { name: 'Company 2', link: '/company2' },
    // Add more companies as needed
];

const footerSocial = [
    {
        path:
            'M19.354 4.354a9 9 0 1 0 0 19.292 9 9 0 0 0 0-19.292zm-4.057 17.75v-6.318h1.873l.281-2.179h-2.154v-1.39c0-.63.185-1.062 1.084-1.062h1.161v-1.93a15.485 15.485 0 0 0-1.646-.084c-1.623 0-2.733.995-2.733 2.83v1.57h-1.837v2.18h1.837v6.318h2.197z',
        link: 'https://example.com/social1',
        name: 'Social 1',
    },
    {
        path:
            'M19.354 4.354a9 9 0 1 0 0 19.292 9 9 0 0 0 0-19.292zm-4.057 17.75v-6.318h1.873l.281-2.179h-2.154v-1.39c0-.63.185-1.062 1.084-1.062h1.161v-1.93a15.485 15.485 0 0 0-1.646-.084c-1.623 0-2.733.995-2.733 2.83v1.57h-1.837v2.18h1.837v6.318h2.197z',
        link: 'https://example.com/social2',
        name: 'Social 2',
    },
    // Add more social links as needed
];

export default function Footer() {
    const location = useLocation()

    return (
        <footer
            style={{
                display: location.pathname === '/login' || location.pathname === '/register' ? 'none' : 'block',
                borderTop: '1px solid #e2e8f0',
            }}
        >
            <Container>
                <Grid container spacing={4} py={4}>
                    {/* 1st block */}
                    <Grid item xs={12} lg={6}>
                        <div style={{ marginBottom: '2rem' }}>
                            {/* Logo */}
                            <Link href="/" color="inherit">
                                {/* Replace this with your logo */}
                                Logo
                            </Link>
                        </div>
                    </Grid>

                    {/* 2nd block */}
                    <Grid item xs={6} md={3} lg={2} style={{ marginLeft: 'auto' }}>
                        <Typography variant="h6" gutterBottom>
                            Marketplace
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {/* Replace with your marketplace links */}
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 1</Link>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 2</Link>
                            </li>
                        </ul>
                    </Grid>

                    {/* 3rd block */}
                    <Grid item xs={6} md={3} lg={2} style={{ marginLeft: 'auto' }}>
                        <Typography variant="h6" gutterBottom>
                            Resources
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {/* Replace with your resources links */}
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 3</Link>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 4</Link>
                            </li>
                        </ul>
                    </Grid>

                    {/* 4th block */}
                    <Grid item xs={6} md={3} lg={2} style={{ marginLeft: 'auto' }}>
                        <Typography variant="h6" gutterBottom>
                            Company
                        </Typography>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            {/* Replace with your company links */}
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 5</Link>
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <Link href="#">Link 6</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                {/* Bottom area */}
                {/*<div*/}
                {/*    style={{*/}
                {/*        display: 'flex',*/}
                {/*        justifyContent: 'space-between',*/}
                {/*        borderTop: '1px solid #e2e8f0',*/}
                {/*        paddingTop: '1rem',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    /!* Social links *!/*/}
                {/*    <ul style={{ listStyleType: 'none', display: 'flex' }}>*/}
                {/*        /!* Replace with your social links *!/*/}
                {/*        <li style={{ marginRight: '1rem' }}>*/}
                {/*            <Link href="#" target="_blank">*/}
                {/*                Social Link 1*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*        <li style={{ marginRight: '1rem' }}>*/}
                {/*            <Link href="#" target="_blank">*/}
                {/*                Social Link 2*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}

                {/*    /!* Copyrights note *!/*/}
                {/*    <Typography variant="body2" color="textSecondary">*/}
                {/*        Made by{' '}*/}
                {/*        <Link*/}
                {/*            href="https://github.com/jinpark0625?tab=repositories"*/}
                {/*            target="_blank"*/}
                {/*            rel="noopener noreferrer"*/}
                {/*            color="inherit"*/}
                {/*        >*/}
                {/*            Jin Park*/}
                {/*        </Link>*/}
                {/*        . All rights reserved.*/}
                {/*    </Typography>*/}
                {/*</div>*/}
            </Container>
        </footer>
    );
}