import {getCurrentTimezone, getTimezoneList} from "../../services/utils";
import {useSelector} from "react-redux";
import {useState} from "react";

export function useTimezoneConfig() {
    const timezoneList = getTimezoneList();

    const formStateTimezone = useSelector(state => state.formState.timezone);
    const [timezone, setTimezone] = useState(formStateTimezone || getCurrentTimezone());
    const [timezoneValidation, setTimezoneValidation] = useState("");

    return {
        timezone,
        setTimezone,
        timezoneValidation,
        setTimezoneValidation,
        timezoneList
    }
}
