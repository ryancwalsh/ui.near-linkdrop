import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  container: {
    height: 56,
    display: 'grid',
    gridTemplateColumns: '56px 56px auto 56px 56px',
    gridTemplateRows: '100%',
    gridTemplateAreas: `
      'a b c d e'
    `,
    alignItems: 'center',
    color: (isActive) => (isActive ? theme.palette.text.primary : theme.palette.text.disabled),
  },
  order: {
    gridArea: 'b',
  },
  publicKey: {
    gridArea: 'c',
  },
  cancel: {
    gridArea: 'd',
  },
  copyButton: {
    gridArea: 'e',
  },
});

export const useStyles = makeStyles(styles, { name: 'Link' });