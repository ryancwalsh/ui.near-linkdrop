import { useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Pagination as MuiPagination } from '@material-ui/lab';

import { useStyles } from './Pagination.styles';
import { PaginationItem } from './PaginationItem/PaginationItem';

export const Pagination = () => {
  const pagination = useStoreState((state) => state.campaigns.campaign.pagination);
  const onLoadKeys = useStoreActions((actions) => actions.campaigns.onLoadKeys);
  const [loader, setLoader] = useState(false);
  const classes = useStyles();

  const { lastPage, total, elementsPerPage } = pagination;

  const handleChange = (_, page) => {
    onLoadKeys({
      page,
      total,
      elementsPerPage,
      showLoader: () => setLoader(true),
      hideLoader: () => setLoader(false),
    });
  };

  return (
    <div className={classes.container}>
      {total > elementsPerPage && (
        <MuiPagination
          renderItem={(item) => <PaginationItem item={item} loader={loader} />}
          onChange={handleChange}
          count={lastPage}
          page={pagination.page}
          color="primary"
          siblingCount={0}
          disabled={loader}
        />
      )}
    </div>
  );
};
