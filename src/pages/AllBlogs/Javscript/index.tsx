
import { Box } from '@mui/material';

import { Helmet } from 'react-helmet';

const Javascript = () => {

  return (
    <div className='px-4 mt-4 ml-2 mr-2'>

      <Helmet>
        <title>{"title"}</title>
        <meta name="description" content={"truncatedDescription"} />
        <meta property="og:title" content={"title"} />
        <meta property="og:description" content={"truncatedDescription"} />
        {/* Add more meta tags as needed */}
      </Helmet>
    <Box>
        hey there
    </Box>

    </div>
  );
};

export default Javascript;
