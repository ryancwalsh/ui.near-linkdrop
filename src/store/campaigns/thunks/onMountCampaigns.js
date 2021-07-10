import { thunk } from 'easy-peasy';
import ky from 'ky';
import { Account } from 'near-api-js/lib/account';
import { config } from '../../../near/config';

const getAccountIdsByPublicKey = (key) =>
  ky.get(`${config.helperUrl}/publicKey/${key}/accounts`, { timeout: 30000 }).json();

const getCampaignsIds = (accountIds, linkdropUserId) =>
  accountIds.filter(
    (accountId) => accountId !== linkdropUserId && accountId.includes(linkdropUserId),
  );

export const onMountCampaigns = thunk(async (_, __, { getStoreState, getStoreActions }) => {
  const state = getStoreState();
  const near = state.general.entities.near;
  const walletUserId = state.general.user.currentAccount;
  const linkdropUserId = state.general.user.accounts[walletUserId].linkdrop.accountId;
  const publicKey = state.general.user.accounts[walletUserId].linkdrop.publicKey;

  const actions = getStoreActions();
  const mountCampaigns = actions.campaigns.mountCampaigns;
  const setError = actions.general.setError;

  try {
    const accountIds = await getAccountIdsByPublicKey(publicKey);
    const campaignIds = getCampaignsIds(accountIds, linkdropUserId);

    // const campaignIds = [
    //   '1000-links.eclipseer.linkdrop.testnet',
    //   '200-links.eclipseer.linkdrop.testnet',
    //   'c1.eclipseer.linkdrop.testnet',
    // ];

    const campaigns = await Promise.all(
      campaignIds.map((campaignId) =>
        new Account(near.connection, campaignId).viewFunction(
          campaignId,
          'get_campaign_metadata',
          {},
        ),
      ),
    );

    mountCampaigns({ campaignIds, campaigns });
  } catch (e) {
    setError({
      isError: true,
      description: e,
    });
  }
});
