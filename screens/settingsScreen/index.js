import { connect } from 'react-redux';
import SettingsScreen from './SettingsScreen';

const mapStateToProps = state => {
  return {
      user: state.userReducer.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

  
  export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
