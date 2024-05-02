import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <Typography variant="body2" align="center" color="textSecondary">
            © {new Date().getFullYear()} All rights reserved.
        </Typography>
    );
}

export default Footer;
