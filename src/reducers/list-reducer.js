import { lists as defaultLists } from '../normalized-state';

const listsReducer = (lists = defaultLists, action) => {
  return lists;
};

export default listsReducer;
