import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set';

//set (chainOfProperties, what you want to replaced, the object you want to replace on)

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;
    const entities = { ...lists.entities };

    const cards = lists.entities[listId].cards.concat(cardId);
    return set(['entities', listId, 'cards'], cards, lists);

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
