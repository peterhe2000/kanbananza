import { connect } from 'react-redux';
import Lists from '../components/Lists';

const mapStateToProps = (state) => {
  console.log('state.lists.ids', state.lists.ids);
  return {
    lists: state.lists.ids,
  };
};

export default connect(mapStateToProps)(Lists);
