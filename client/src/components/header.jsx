import AccountMenu from "./ui/accountMenu.jsx"
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
    return (
        <AppBar position="fixed" sx ={{backgroundColor:"beige"}}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{display:"flex", justifyContent:"Left"}}>
                    <Typography variant="h6">My Logo</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
                    <Typography>Home</Typography>
                    <Typography>About</Typography>
                    <Typography>Contact</Typography>
                </Box>
                <AccountMenu/>
            </Toolbar>
        </AppBar>
    )
}


export {Header}

