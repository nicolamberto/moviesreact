
import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize({page, setPage, fetching}) {

    const handleChange = (event, value) => {
        setPage(value);
        fetching()
      };

    console.log(page);

  return (
    <Stack sx={{ display:'flex', justifyContent:'center', alignItems:'center'}} spacing={2}>
        <Typography>Page: {page} (double click)</Typography>
        <Pagination count={10} page={page} size="large" onChange={handleChange} />
    </Stack>
  );
}