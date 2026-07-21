import {test as base} from '../evidence/artifact'
import {Scenario1} from '../flows/Scenario1Flow'
import {Scenario2} from '../flows/Scenario2Flow'


export const test =
base.extend
<{
    home : Scenario1    
    product : Scenario1   
    pdp : Scenario2   
    cart : Scenario2   
    checkout : Scenario2   
    payment : Scenario2 
}>
({
    home : async({page},use)=>
    {
        await use(new Scenario1(page))
    },
     product : async({page},use)=>
    {
        await use(new Scenario1(page))
    },
     pdp : async({page},use)=>
    {
        await use(new Scenario2(page))
    },
     cart : async({page},use)=>
    {
        await use(new Scenario2(page))
    },
    checkout : async({page},use)=>
    {
        await use(new Scenario2(page))
    }
    ,
    payment : async({page},use)=>
    {
        await use(new Scenario2(page))
    }


})
