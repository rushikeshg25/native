import React from 'react';
import Activity from '@/components/Activities/Activity';
import PageWrapperView from '@/components/PageWrapperView';

const activity = () => {
  return (
    <PageWrapperView isHeaderShown={true}>
      <Activity />
    </PageWrapperView>
  );
};

export default activity;
