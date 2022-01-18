import { Button } from '@material-ui/core';
import { Navigate } from '../../../../../providers/MemoryRouter';
import { useJss } from './Type.jss';

export const Type = ({ type, to }) => {
  const jss = useJss();
  return (
    <Navigate to={to}>
      <Button className={jss.container}>
        <div className={jss.imageContainer}>aa</div>
        <span>{type}</span>
      </Button>
    </Navigate>

  );
};
