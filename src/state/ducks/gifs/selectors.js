// selectors will be used outside the duck, hence they're part of the duck's interface
// selectors are for mapping parts of our state to our props, mostly in more complex state shapes 
// e.g. isUserAuthenticated 

// TODO: for now, I don't grasp this concept. Revisit this. Below is a dummy fucntion export

const isDummySelector = () => {
    return true;
}

const isAnotherDummySelector = () => {
    return true;
}

export {
    isDummySelector,
    isAnotherDummySelector
};
