import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

const SortByDropdown = () => {
    const [sortValue, setSortValue] = useState("popular");

    const handleSortChange = (event) => {
        setSortValue(event.target.value);

    };

    return (
        <Box sx={{ minWidth: 120, display: 'flex', gap: '20px' }}>
            <SortIcon sx={{ fontSize: '20px', color: 'gray' }} />
            <Typography>Sort</Typography>
            <FormControl fullWidth>
                <Select
                    value={sortValue}
                    label="Sort By"
                    onChange={handleSortChange}
                    sx={{
                        height: 30,
                        fontSize: '0.875rem',
                        '& .MuiSelect-icon': { fontSize: '1.2rem' }
                    }}
                >
                    <MenuItem value="popular">Popular</MenuItem>
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SortByDropdown;
