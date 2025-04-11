import { Box, Button, Container, Divider, Grid, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const ContainerAccount = () => {
    const [tab, setTab] = useState(0);
    
    return (
        <Container maxWidth="sm">
      <Box sx={{ mt: 2 }}>
        {/* Navigation Tabs */}
        <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} variant="fullWidth" >
          <Tab label="บัญชีของฉัน" sx={{ borderColor: "#ff9f00" }}/>
          <Tab label="การซื้อของฉัน" />
        </Tabs>

        {/* Form Content */}
        {tab === 0 && (
          <>
            <Typography variant="h6" sx={{ mt: 3, fontSize: "16px", fontWeight: "medium" }}>
              ข้อมูลบัญชี
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mt: 3, fontSize: "14px", fontWeight: "medium" }}>
                ชื่อ
                </Typography>
                <TextField fullWidth label="ชื่อ" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mt: 3, fontSize: "14px", fontWeight: "medium" }}>
                นามสกุล
                </Typography>
                <TextField fullWidth label="นามสกุล" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mt: 3, fontSize: "14px", fontWeight: "medium" }}>
                โทรศัพท์
                </Typography>
                <TextField fullWidth label="โทรศัพท์" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" sx={{ mt: 3, fontSize: "14px", fontWeight: "medium" }}>
                Email
                </Typography>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 3, fontSize: "14px", fontWeight: "medium" }}>
                ที่อยู่
                </Typography>
                <TextField fullWidth label="ที่อยู่" variant="outlined" />
              </Grid>
            </Grid>

            {/* Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
              <Button variant="contained" sx={{ width: 160, height: 48,  borderRadius: 20, bgcolor: "#ff9f00", color: "white" }} >
                Update Profile
              </Button>
              <Button variant="outlined" sx={{ width: 160, height: 48,  borderRadius: 20 }}>
                Clear All
              </Button>
            </Box>

            {/* Divider */}
            <Divider sx={{ mt: 4, mb: 2 }} />

            {/* Login Section */}
            <Typography variant="h6">Login</Typography>
            <Typography variant="body2">Password (อัปเดตล่าสุดเมื่อ 1 เดือนที่แล้ว)</Typography>
            <Button variant="outlined" sx={{ width: 180, height: 40,  borderRadius: 20 }}>
              Update Password
            </Button>
          </>
        )}
      </Box>
    </Container>
    )
}

export default ContainerAccount