import React from 'react';
import {
    Box, IconButton, Badge,
} from '@mui/material';
import {useLocation} from "react-router-dom";
import {shades} from "../../theme";
import {MenuOutlined, PersonOutline, SearchOutlined, ShoppingBagOutlined} from "@mui/icons-material";

const NavBar = () => {
    const location = useLocation()

    return (
        <Box
            display="flex"
            alignItems="center"
            width="100%"
            height="60px"
            // backgroundColor="rgba(255, 255, 255, 0.95)"
            // color="black"
            // position="fixed"
            // top="0"
            // left="0"
            // zIndex="1"
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box
                    // onClick={() => location("/")}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                    color={shades.secondary[500]}
                >
                    ECOMMER
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    columnGap="20px"
                    zIndex="2"
                >
                    <IconButton sx={{ color: "black" }}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{ color: "black" }}>
                        <PersonOutline />
                    </IconButton>
                    <Badge
                        // badgeContent={cart.length}
                        color="secondary"
                        // invisible={cart.length === 0}
                        sx={{
                            "& .MuiBadge-badge": {
                                right: 5,
                                top: 5,
                                padding: "0 4px",
                                height: "14px",
                                minWidth: "13px",
                            },
                        }}
                    >
                        <IconButton
                            // onClick={() => dispatch(setIsCartOpen({}))}
                            sx={{ color: "black" }}
                        >
                            <ShoppingBagOutlined />
                        </IconButton>
                    </Badge>
                    <IconButton sx={{ color: "black" }}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;