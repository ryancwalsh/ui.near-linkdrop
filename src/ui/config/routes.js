export const routes = {
  root: '/',
  connectWallet: '/connect-wallet',
  createAccount: '/create-account',
  campaigns: '/campaigns',
  createCampaign: '/create-campaign',
  completeCampaignCreation: '/complete-campaign-creation',
  campaign: '/campaigns/:campaignId',
};

export const getRoute = {
  campaign: (campaignId) => `/campaigns/${campaignId}`,
};
