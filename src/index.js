import "@babel/polyfill/noConflict";

import axios from "axios";

export default class Impulsor {
    constructor(adspaceId, token){
        this.adspaceId = adspaceId;
        this.token = token;
        this.api = "http://api.impulsor.me/public/";
    }

    async campaigns(offset = 0, limit = 100){
        let buffer = await axios.get(`${this.api}campaigns?token=${this.token}&limit=${limit}&skip=${offset}`);
        return buffer.data;
    }

    async coupons(offset = 0, limit = 100){
        let buffer = await axios.get(`${this.api}coupons?token=${this.token}&limit=${limit}&skip=${offset}`);
        return buffer.data;
    }

    async banners(offset = 0, limit = 100){
        let buffer = await axios.get(`${this.api}banners?token=${this.token}&limit=${limit}&skip=${offset}`);
        return buffer.data;
    }

    async deeplink(url, shortener = null){
        let buffer;

        if(typeof shortener == "string")
            buffer = await axios.get(`${this.api}deeplink?token=${this.token}&adspace=${this.adspaceId}&url=${decodeURIComponent(url)}&shortener=${decodeURIComponent(shortener)}`);
        else
            buffer = await axios.get(`${this.api}deeplink?token=${this.token}&adspace=${this.adspaceId}&url=${decodeURIComponent(url)}`);

        return buffer.data;
    }
}