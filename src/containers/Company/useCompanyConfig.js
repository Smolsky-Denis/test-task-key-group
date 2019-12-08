import {useSelector} from "react-redux";
import {useState} from "react";

export function useCompanyConfig() {
    const formStateCompany = useSelector(state => state.formState.company);
    const [company, setCompany] = useState(formStateCompany);

    return {
        company,
        setCompany
    }
}
