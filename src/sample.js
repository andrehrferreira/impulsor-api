import "@babel/polyfill/noConflict";

import Impulsor from "./index";

const impulsor = new Impulsor("AdspaceID", "Token");

(async () => {
    //Campaigns
    let campaigns = await impulsor.campaigns();
    console.log(campaigns);

    //Coupons
    let coupons = await impulsor.coupons(20, 0, 1000);
    console.log(coupons);

    //Deeplink
    let deeplink = await impulsor.deeplink("https://www.eletrum.com.br", "<Encurtador>");
    console.log(deeplink);
})();