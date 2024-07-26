import React from 'react';
import { cn } from '@/utils/tw-merge';
import { ScrollView } from 'react-native';

const ScrollableCard = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <ScrollView className={cn('rounded-t-3xl pb-20 ', classname)}>
      {children}
    </ScrollView>
  );
};

export default ScrollableCard;
