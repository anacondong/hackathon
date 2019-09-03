const logger = ({ getState, dispatch }) => next => action => {
    console.log('dispatching >>>>',action);
    next(action);
    console.log('next >>>>',action);
} 

export default logger