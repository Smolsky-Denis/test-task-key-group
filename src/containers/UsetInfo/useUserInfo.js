import {getGenderList} from "../../services/utils";
import {useSelector} from "react-redux";
import {useState} from "react";

export function useUserInfo() {
    const genderList = getGenderList();

    const formStateFirstName = useSelector(state => state.formState.firstName);
    const formStateLastName = useSelector(state => state.formState.lastName);
    const formStateGender = useSelector(state => state.formState.gender);

    const [firstName, setFirstName] = useState(formStateFirstName);
    const [lastName, setLastName] = useState(formStateLastName);
    const [gender, setGender] = useState(formStateGender);

    const [firstNameValidation, setFirstNameValidation] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState("");
    const [genderValidation, setGenderValidation] = useState("");

    return {
        genderList,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        gender,
        setGender,
        firstNameValidation,
        setFirstNameValidation,
        lastNameValidation,
        setLastNameValidation,
        genderValidation,
        setGenderValidation
    }
}
