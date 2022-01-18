import { Button } from '@material-ui/core';
import { Navigate } from '../../../../providers/MemoryRouter';
import { Type } from './Type/Type';
import { memoryRoutes } from '../../../../../config/routes';
import { useJss } from './SelectType.jss';

export const SelectType = () => {
  const jss = useJss();

  return (
    <div className={jss.container}>
      <h1 className={jss.header}>Select campaign type</h1>
      <div className={jss.types}>
        <Type type="NEAR" to={memoryRoutes.createCampaign.near.generalData}/>

        <Navigate to={memoryRoutes.createCampaign.nft.campaignData}>
          <Button variant="outlined">NFT</Button>
        </Navigate>
      </div>
    </div>
  );
};
