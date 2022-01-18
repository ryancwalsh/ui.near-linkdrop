import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    width: '100vw',
    minHeight: 'calc(100vh - 40px - 73px)', // height of topbar + caution
    display: 'grid',
    gridTemplateColumns: '256px auto',
    gridTemplateRows: 'auto 52px',
    gridTemplateAreas: `
      'a b'
      'a c'
    `,
    '@media (max-width: 800px)': {
      minHeight: 'calc(100vh - 40px - 65px)',
      gridTemplateAreas: `
        'b'
        'c'
      `,
      gridTemplateColumns: '100%',
    },
  },
  pages: {
    gridArea: 'b',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  pagesWrapper: {
    width: 'calc(100% - 24px - 24px)',
    '@media (min-width: 1024px)': {
      width: 'calc(100% - 48px - 48px)',
    },
    '@media (max-width: 600px)': {
      width: 'calc(100% - 16px - 16px)',
    },
  },
  footer: {
    gridArea: 'c',
  },
};

export const useStyles = makeStyles(styles, { name: 'Main' });
