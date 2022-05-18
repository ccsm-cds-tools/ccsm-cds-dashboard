import { useState, useMemo } from 'react';

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      // TODO: Make this sort more robust
      sortableItems.sort((a, b) => {
        const akey = a[sortConfig.key] ?? '';
        const bkey = b[sortConfig.key] ?? '';
        if (akey < bkey) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (akey > bkey) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};