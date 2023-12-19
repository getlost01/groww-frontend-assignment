// @mui
import { Typography, Stack, StackProps } from '@mui/material';
//
import Image from '../image';

// ----------------------------------------------------------------------

interface EmptyContentProps extends StackProps {
  title: string;
  img?: string;
  description?: string;
}

export default function EmptyContent({ title, description, img, sx, ...other }: EmptyContentProps) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        textAlign: 'center',
        p: (theme) => theme.spacing(8, 2),
        ...sx,
      }}
      {...other}
    >
      <Image
        disabledEffect
        alt="empty content"
        src={img || '/assets/empty-cart.png'}
        draggable={false}
        sx={{ height: 240, mb: 3, bgcolor: '#fff', borderRadius: 1.5 }}
      />

      <Typography variant="h5">
        {title}
      </Typography>

      {description && (
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
