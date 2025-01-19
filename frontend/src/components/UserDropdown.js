import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Typography, Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const UserDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <ArrowDropDownIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleSelectOption('Profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleSelectOption('Logout')}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default UserDropdown;
