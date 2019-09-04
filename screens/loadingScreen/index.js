import { connect } from 'react-redux';
import LoadingScreen from './LoadingScreen';
import {updateUser} from '../../src/actions/userActions'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
