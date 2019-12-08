const InitialState = {
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    company: ''
};

function formState(state = InitialState, actions) {
    switch (actions.type) {
        case "SAVE_EMAIL":
            return {
                ...state,
                email: actions.email
            };
        case "SAVE_USER_INFO":
            return {
                ...state,
                firstName: actions.payload.firstName,
                lastName: actions.payload.lastName,
                gender: actions.payload.gender
            };
        case "SAVE_COMPANY":
            return {
                ...state,
                company: actions.company
            };
        default:
            return state;
    }
}


export const FormState = {
    formState
};
