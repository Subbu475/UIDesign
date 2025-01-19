import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Subramani",
    email: "subbudme475@gmail.com",
    address: "Trichy.",
    avatarUrl: "https://api.adorable.io/avatars/300/men_avatar.png"
  });


const navigate = useNavigate();


  return (
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Avatar
            alt="User Avatar"
            src={user.avatarUrl}
            sx={{ width: 120, height: 120, marginBottom: 2 }}
          />
      
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h4" sx={{ marginBottom: 3 }}>
            Profile Information
          </Typography>

          <form>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={user.name}
              name="name"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={user.email}
              name="email"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              value={user.address}
              name="address"
              sx={{ marginBottom: 2 }}
            />
            <Button onClick={()=>{
                navigate('/')
            }}>Back</Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
