import { Box, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Box
			component="footer"
			padding={4}
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="sticky"
			top="100dvh"
		>
			<Typography variant="body2">© 2024 risu729</Typography>
		</Box>
	);
};

export default Footer;
