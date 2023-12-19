import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box, Link, BoxProps } from '@mui/material';
import Image from '../image';
import useCustomTheme from '@/zustand/customTheme';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const { themeData } = useCustomTheme();

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 36,
          height: 36,
          display: 'inline-flex',
          cursor: 'pointer',
          ...sx,
        }}
        {...other}
      >
        <Image
          disabledEffect
          visibleByDefault
          alt="logo"
          src={'/logo.png'}
          width={'100%'}
        />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

Logo.displayName = 'Logo';

export default Logo;
