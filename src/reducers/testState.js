const testState = (state = 'initValue', action) => {
    switch (action.type) {
        case 'test':
            return new Date()
        default:
            return state;
    }
};

export default testState;
