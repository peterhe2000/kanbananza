import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set';
import { addIdToChildren } from './_utilities';

//set (chainOfProperties, what you want to replaced, the object you want to replace on)
// chainOfProperties eg: entities, listId what we are looking for, cards
const listsReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;
    const entities = { ...lists.entities };

    return addIdToChildren(lists, listId, 'cards', cardId);

    // const cards = lists.entities[listId].cards.concat(cardId);
    // return set(['entities', listId, 'cards'], cards, lists);

    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId),
    // };

    // return {
    //   ...lists,
    //   entities,
    // };
  }
  return lists;
};

export default listsReducer;
