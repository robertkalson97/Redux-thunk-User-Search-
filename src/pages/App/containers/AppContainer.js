
import { connect } from 'react-redux';
import App from '../components/App';
import { fetchuser } from '../modules/actions';

export default connect(
  ({ app }) => ({...app}),
  (dispatch) => ({ 
    fetchuser: (keyword) => dispatch(fetchuser(keyword)),
  }),
)(App);