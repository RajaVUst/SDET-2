import {expect,test as base} from "../evidence/artifact"
import {ShippingValidationFlow} from "../flow/ShippingValidationFlow"
import {PaymentFailFlow} from "../flow/PaymentFailFlow"
export const test=base.extend<{
    test1:ShippingValidationFlow,
    test2:PaymentFailFlow;
    }>
    
({
    test1:async ({page},use)=>{
        await use (new ShippingValidationFlow(page))
    },
     test2:async ({page},use)=>{
        await use (new PaymentFailFlow(page))
    }
})
export{expect} from "@playwright/test"