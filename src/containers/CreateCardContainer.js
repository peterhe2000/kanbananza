import { connect } from 'react-redux';
import { createCard } from '../actions/card-actions';
import CreateCard from '../components/CreateCard';

// const defaultCardData = {
//   title: '',
//   description: '',
//   assignedTo: '',
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createCard(listId, cardData) {
//       const cardId = Date.now().toString();
//       const card = {
//         id: cardId,
//         ...defaultCardData,
//         ...cardData,
//       };

//       dispatch({
//         type: 'CARD_CREATE',
//         payload: { card, listId, cardId },
//       });
//     },
//   };
// };

// React have way to bind Action creator with dispatch
const mapDispatchToProps = { createCard };

export default connect(null, mapDispatchToProps)(CreateCard);
