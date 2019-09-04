const logger = ({ getState, dispatch }) => next => action => {
    console.log('\n<<<< before >>>>\n',action);
    next(action);
    console.log('\n<<< after >>>>\n',action);
} 

export default logger