const InitialState = {
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    company: '',
    timezone: ''
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
        case "SAVE_TIMEZONE":
            return {
                ...state,
                timezone: actions.timezone,
            };
        case "SAVE_COMPANY":
            return {
                ...state,
                company: actions.company
            };
        case "SAVE_ALL":
            debugger
            return {
                ...state,
                ...actions.payload
            };
        default:
            return state;
    }
}


export const FormState = {
    formState
};
