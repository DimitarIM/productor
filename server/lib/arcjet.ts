import arcjet, { tokenBucket, shield, detectBot} from "@arcjet/node";

import dotenv from "dotenv";

dotenv.config();

const ajKey:string = process.env.ARCJET_KEY!;

export const aj = arcjet({
    key: ajKey,
    characteristics:["ip.src"],
    rules: [
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            allow:[
                "CATEGORY:SEARCH_ENGINE"
            ]
        }),
        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval:10,
            capacity:10,
        })
    ]
});