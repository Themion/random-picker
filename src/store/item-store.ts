import { create } from 'zustand';

import type { Item, ItemMap } from '~/types/item';

type Store = {
  items: ItemMap;
  upsert: (id: string, item: Partial<Item>) => void;
  remove: (id: string) => void;
};

const getEmptyItem = (): Item => ({ text: '', progress: 0 });

const itemStore = create<Store>((set) => ({
  items: new Map(),
  upsert: (id, item) =>
    set(({ items, ...state }) => {
      const currentItem = items.get(id) ?? getEmptyItem();
      return { ...state, items: items.set(id, { ...currentItem, ...item }) };
    }),
  remove: (id) =>
    set(({ items, ...state }) => {
      items.delete(id);
      return { ...state, items };
    }),
}));

export default itemStore;
