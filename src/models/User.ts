import {
  types,
  Instance,
  SnapshotIn,
  getParent,
  destroy,
} from "mobx-state-tree";

export const Tag = types.model({
  name: types.string,
});

export const UserItem = types
  .model({
    name: types.string,
    id: types.number,
  })
  .actions((self) => ({
    changeName(newName: string) {
      self.name = newName;
    },
    remove() {
      getParent<typeof User>(self, 2).removeUser(self);
    },
  }));

export const User = types
  .model({
    items: types.optional(types.array(UserItem), []),
  })
  .actions((self) => ({
    addUser(cartItem: SnapshotIn<typeof UserItem> | Instance<typeof UserItem>) {
      self.items.push(cartItem);
    },
    removeUser(item: SnapshotIn<typeof UserItem>) {
      destroy(item);
    },
  }));
