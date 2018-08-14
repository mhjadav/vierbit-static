import axios from "axios";

export const sendEmail = (data) => {
    //axios.post('http://localhost:4000/api/send-email', data);
    axios.post('/api/send-email', data);
}

export const sendSubscriptionEmail = (data) => {
    //axios.post('http://localhost:4000/api/subscription-email', data);
    axios.post('/api/subscription-email', data);
}

export const scrollTop = () => {
    window.$("html, body").animate({
        scrollTop: 0
    }, 500);
}

export const findADomain = (domainName) => {
    return axios.get('/api/findadomain?domain=' + domainName);
}

export const findADomainSuggest = (domainName) => {
    return axios.get('/api/findadomainsuggest?domain=' + domainName);
}

export const makeaWebsiteApi = (data) => {
    return axios.post('/api/makeawebsite', data);
}