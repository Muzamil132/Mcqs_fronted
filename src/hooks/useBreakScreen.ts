import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const useBreakPoint=():boolean=>{

    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up("sm"))
    return match

}