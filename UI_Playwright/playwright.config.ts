import { defineConfig, devices } from "@playwright/test";
import {Env } from './utils/Env'
const CI = !!process.env.CI;
 
export default defineConfig({
    testDir:"./tests",
    timeout: 10_000,
    fullyParallel: true,
    retries: CI ? 2:0,
    reporter: CI ? [["list"], ["blob"], ["html", {open: "never"}]] : [["html", {open: "never"}]],
    use:{
        baseURL: Env.get("BASE_URL") ,
        screenshot: CI ? "only-on-failure" : "on",
        trace: CI ? "on-first-retry" : "off",
        video: CI ? "retain-on-failure" : "off"
        
    },
    projects:[
        {
            name: "chromium",
            use: {...devices["Desktop Chrome"]}
        }
    ]
});
 