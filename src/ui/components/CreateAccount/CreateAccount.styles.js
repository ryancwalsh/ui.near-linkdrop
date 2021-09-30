import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    minHeight: 'calc(100vh - 73px - 52px - 50px)', // caution + topbar + footer
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '13vh',
  },
};

export const useStyles = makeStyles(styles, { name: 'CreateAccount' });
