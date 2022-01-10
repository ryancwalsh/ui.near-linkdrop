import { useHistory } from 'react-router-dom';
import { Divider, Typography } from '@material-ui/core';
import cn from 'classnames';
import { campaignStatus, campaignTypes } from '../../../../../../config/campaignStatus';
import { ResumeAction } from './ResumeAction/ResumeAction';
import { getTotalAmount, getDate, getCampaignName } from '../../../../../utils/formatCampaignData';
import { getRoute } from '../../../../../../config/routes';
import { useStyles } from './Campaign.styles';
import { NearIcon } from '../../../../general/icons/NearIcon';
import { NftIcon } from '../../../../general/icons/NftIcon';

const icons = {
  near: NearIcon,
  nft: NftIcon,
};

export const Campaign = ({ campaign }) => {
  const { campaignId, keysStats, tokensPerKey, createdAt, status, type } = campaign;
  const isUncompleted =
    campaign.status === campaignStatus.creation || campaign.status === campaignStatus.deletion;

  const { push } = useHistory();
  const classes = useStyles({ isUncompleted });

  const Icon = type === campaignTypes.near ? icons.near : icons.nft

  const goToCampaign = () => {
    if (isUncompleted) return;
    push(getRoute.campaign(campaignId));
  };

  return (
    <div
      className={classes.container}
      onClick={goToCampaign}
      onKeyPress={goToCampaign}
      role="button"
      tabIndex={0}
    >
      <span className={classes.iconWrapper}>
        <Icon className={classes.icon} />
      </span>
      <Typography className={classes.name} noWrap>
        {getCampaignName(campaignId)}
      </Typography>
      <span className={classes.totalNear}>{getTotalAmount(tokensPerKey, keysStats.total)}</span>
      {isUncompleted ? (
        <ResumeAction campaign={campaign} />
      ) : (
        <>
          <span className={cn(classes.label, classes.links)}>Links</span>
          <span className={cn(classes.value, classes.linksValue)}>{keysStats.total}</span>
          <Divider className={cn(classes.divider, classes.divider1)} />
          <span className={cn(classes.label, classes.created)}>Created</span>
          <span className={cn(classes.value, classes.createdValue)}>{getDate(createdAt)}</span>
          <Divider className={cn(classes.divider, classes.divider2)} />
          <span className={cn(classes.label, classes.status)}>Status</span>
          <span className={cn(classes.value, classes.statusValue)}>{status}</span>
        </>
      )}
    </div>
  );
};
