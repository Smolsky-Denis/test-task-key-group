import {EMAIL_TYPES} from "../actions/emailActions";


const InitialState = {
    verificationEmailData: {}
};

function emailPageInfo(state = InitialState, actions) {
    switch (actions.type) {
        case EMAIL_TYPES.VERIFICATION_EMAIL:
            return {
                ...state,
                verificationEmailData: actions.verificationEmailData
            };
        default:
            return state;
    }
}


export const EmailPageInfo = {
    emailPage: emailPageInfo
};
