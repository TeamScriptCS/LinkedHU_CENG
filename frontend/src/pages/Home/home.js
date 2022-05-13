import { Grid } from '@mui/material';
import Leftbar from '../../components/Leftbar'
import Feed from '../../components/Feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar';

const HomePage = () => {
  return (
    <div>
      <Grid container>
        <Grid xs="3">
          <Leftbar/>
        </Grid>
        <Grid item xs="5" alignItems="center" justifyContent="center">
          <Feed/>
        </Grid>
        <Grid xs="4">
          <Rightbar/>
        </Grid>
      </Grid>

    </div>
  );
}

export default HomePage;