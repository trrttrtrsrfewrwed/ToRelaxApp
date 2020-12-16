  
  const changingElemReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_RATING':
        return {
          ...state,
          rating: action.value 
        }
        case 'CHANGE_CATEGORY':
          return {
            ...state,
            category: action.category 
          }
        case 'CHANGE_NAME':
          return {
            ...state,
            name: action.name
          }
        case 'CHANGE_DESCRIPTION':
          return {
            ...state,
            description: action.description 
          } 
        case 'CHANGE_DURATION':
          return {
            ...state,
            duration: action.duration
          }
      default:
        return state;
    }
  };
  
  export default changingElemReducer