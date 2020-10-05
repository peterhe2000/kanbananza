import { connect } from 'react-redux';
import List from '../components/List';

const mapStateToProps = (state, ownProps) => {
  // 2nd argument ownProps is property pass to container when u use it
  return { list: state.lists.entities[ownProps.listId] };
};

export default connect(mapStateToProps)(List);
