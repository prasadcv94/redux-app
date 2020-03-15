//a reducer takes in two things

// 1. the action(info about what happened)
// 2. copy of current state

function postComments(state = [], action) {
    //console.log(state, action);
    switch(action.type) {
        case 'ADD_COMMENT':
            //return the new state with new comment
            return [...state,{
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            return state;
        default: 
            return state;
    }
    return state;
}

function comments(state = [], action) {
    //console.log(state, action);
    if(typeof action.postId !== 'undefined'){
        return {
            //take the current state
            ...state,
            //overwrite this post with new one 
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;