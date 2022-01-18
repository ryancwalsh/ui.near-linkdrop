import { makeStyles } from '@material-ui/core';

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '16px 72px auto',
    gridTemplateAreas: `
      '.'
      'a'
      'b'
    `,
  },
  body: {
    gridArea: 'b',
    height: '100%',
    width: '100%',
  },
};

export const useJss = makeStyles(styles, { name: 'CreateCampaign' });
