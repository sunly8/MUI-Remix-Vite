import { Stack, Box, SxProps } from "@mui/material";
import { colors } from "@mui/material";

export default function Logo({ sx, onClick }: { sx?: SxProps, onClick?: () => void }) {
  return <Stack direction="row" spacing={2} sx={sx} onClick={onClick}>
    <img style={{ width: 32, height: 32 }} src="/logo.svg" alt="logo" />
    <Box sx={{ lineHeight: 1, cursor: 'pointer' }}>
      <Box><span>YourData</span><sup style={{ color: colors.blue['A100'] }}>+</sup></Box>
      <Box sx={{ fontSize: 10, opacity: 0.5 }}>玉东数据</Box>
    </Box>
  </Stack>
}