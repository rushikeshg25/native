import React from 'react';

import { useState } from 'react';
import { IconButton, Menu } from 'react-native-paper';

export const SortButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleSortOption = (option: string) => {
    console.log(`Sorted by ${option}`);
    closeMenu();
  };

  return (
    <Menu
      visible={menuVisible}
      onDismiss={closeMenu}
      anchor={<IconButton icon='sort' size={30} onPress={openMenu} />}
    >
      <Menu.Item onPress={() => handleSortOption('today')} title='Today' />
      <Menu.Item
        onPress={() => handleSortOption('yesterday')}
        title='Yesterday'
      />
      <Menu.Item
        onPress={() => handleSortOption('date')}
        title='Choose a Date'
      />
    </Menu>
  );
};
