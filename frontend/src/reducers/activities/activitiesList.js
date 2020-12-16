
  const activitiesListReducer = (state, action) => {
    switch (action.type) {
      case 'MAXIMIZE':
        return state.map(elem=>{
          if (elem.id === action.id) {
            elem.minimized = false;
          } else {
            elem.minimized = true;
          }
          return elem;
        })
      case 'MINIMIZE':
        return state.map(elem=>{
          if (elem.id === action.id) {
            elem.minimized = true;
          } 
          return elem;
        })
      default:
        return state;
    }
  };
  
  export default activitiesListReducer