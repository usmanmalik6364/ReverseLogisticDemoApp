import { Box, CircularProgress } from "@mui/material";

interface Props{
    content?:string;
}

export default function LoadingComponent({content="Loading..."}:Props){
    return(
        <Box sx={{ display: 'flex' }}>
        <CircularProgress content={content} />
      </Box>
    );
}