import {postRequest} from "../services/utils";


export const EMAIL_TYPES = {
    VERIFICATION_EMAIL: 'VERIFICATION_EMAIL'
};

export function verificationEmail(requestData) {
    return (dispatch) => postRequest('https://frontapi.vinchain.io/auth/api/check-email/', requestData)
        .then(verificationEmailData => dispatch({
            type: EMAIL_TYPES.VERIFICATION_EMAIL,
            verificationEmailData
        }));
}


export function verifyEmail(requestData) {
    return postRequest('https://frontapi.vinchain.io/auth/api/check-email/', requestData)
}
