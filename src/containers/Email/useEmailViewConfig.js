import {useSelector} from "react-redux";
import {useState} from "react";

export function useEmailViewConfig() {
    const formStateEmail = useSelector(state => state.formState.email);
    const [email, setEmail] = useState(formStateEmail);
    const [emailValidation, setEmailValidation] = useState("");
    return {
        email,
        setEmail,
        emailValidation,
        setEmailValidation
    }
}
