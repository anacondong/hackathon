import { connect } from 'react-redux';
import ChatsScreen from './ChatsScreen';
// import * as  counterActions from '../../src/actions/counterActions'

const mapStateToProps = state => {
    return {
        // counter: state.counterReducer.counter,
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        // increaseCounter: () => dispatch(counterActions.increaseCounter()),
        // decreaseCounter: () => dispatch(counterActions.decreaseCounter()),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChatsScreen);
