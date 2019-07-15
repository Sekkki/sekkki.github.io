export default (state = {}, action) => {
    switch (action.type){
        case "LOG_IN":
            return true;
        case "LOG_OUT":
            return false;
        case "SET_AUTH":
            return action.payload || false;   
        default:
            return false;
    }
};
