const printLogFlg = false;

const logger = ({ getState, dispatch }) => next => action => {
    if( printLogFlg ) {
        console.log('\n<<<< before >>>>\n',action);
        next(action);
        console.log('\n<<< after >>>>\n',action);
    } else {
        next(action);
    }
} 

export default logger