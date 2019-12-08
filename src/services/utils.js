import {Button} from "../components/Button/Button";
import {Title} from "../components/Title/Title";
import {Select} from "../components/Select/Select";
import {Input} from "../components/Input/Input";
import {ProgressLine} from "../components/ProgressLine/ProgressLine";
import React from "react";
import {Link} from "../components/Link/Link";
import {FormHeader} from "../components/FormHeader/FormHeader";
import {getAllTimezones, getTimezone} from "countries-and-timezones";

export const getCurrentTimezone = () => getTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone).name;

export const getTimezoneList = () => Object.values(getAllTimezones()).map(timezone => timezone.name);

export const getGenderList = () => ["Male", "Female"];

export const checkRequiredField = (field) => {
    return field.length ? "" : "Field is required"
};

export const MapDataToPageElementsService = {
    elementTypeList: {
        title: function (item) {
            return <Title key={item.id} data={item}/>
        },
        button: function (item) {
            return <Button key={item.id} data={item}/>
        },
        select: function (item) {
            return <Select key={item.id} data={item}/>
        },
        input: function (item) {
            return <Input key={item.id} data={item}/>
        },
        progress: function (item) {
            return <ProgressLine key={item.id} data={item}/>
        },
        link: function (item) {
            return <Link key={item.id} data={item}/>
        },
        formHeader: function (item) {
            return <FormHeader key={item.id} data={item}/>
        },
    },
    getElementFormService: function (cardFields) {
        return cardFields && cardFields.map((item) => this.elementTypeList[item.element](item));
    }
};


const progress = () => {
    let i = 0;
    let width = document.getElementById('progressBar').parentNode.clientWidth;
    let id = setInterval(grow, 10);

    function grow() {
        if (i < width) {
            i += 1;
            if (!document.getElementById('progressBar').setAttribute("style", "width: " + i + "px;"))
                document.getElementById('progressBar').style.width = i;

        } else {
            alert('готово');
            clearInterval(id);
        }
    }
};

export let postRequest = (url, request) => {
    let promise = new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: request,
        })
            .then(result => {
                return result.status !== 200 ? result.json() : result
            })
            .then(response => {
                resolve(response)
            })
    });
    return promise;
};
