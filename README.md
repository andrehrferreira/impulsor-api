# @vigiadepreco/impulsor

API integration with Impulsor

## Install

```bash
$ yarn add @vigiadepreco/impulsor --save
```

## Usage

```js
import Impulsor from "@vigiadepreco/impulsor";

const impulsor = new Impulsor("AdspaceID", "Token");

(async () => {
    //Campaigns
    let campaigns = await impulsor.campaigns();
    console.log(campaigns);

    //Coupons
    let coupons = await impulsor.coupons();
    console.log(coupons);

    //Report
    let report = await impulsor.report("2020-04-01", "2020-04-01");
    console.log(report);

    //Deeplink
    let deeplink = await impulsor.deeplink("https://www.eletrum.com.br", "<Encurtador>");
    console.log(deeplink);
})();
```