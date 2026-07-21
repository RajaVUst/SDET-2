import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const isCI = !!process.env.CI;

export default defineConfig({

    // -------------------------------------------------
    // Test Directory
    // -------------------------------------------------
    testDir: "./tests",

    // -------------------------------------------------
    // Global Timeout
    // -------------------------------------------------
    timeout: 60 * 1000,

    expect: {
        timeout: 10 * 1000
    },

    // -------------------------------------------------
    // Parallel Execution
    // -------------------------------------------------
    fullyParallel: true,

    forbidOnly: isCI,

    retries: isCI ? 2 : 0,

    workers: isCI ? 4 : undefined,

    // -------------------------------------------------
    // Output Folder
    // -------------------------------------------------
    outputDir: "test-results/",

    // -------------------------------------------------
    // Reports
    // -------------------------------------------------
    reporter: [
        ["list"],

        [
            "html",
            {
                outputFolder: "playwright-report",
                open: "never"
            }
        ],

        [
            "json",
            {
                outputFile: "reports/report.json"
            }
        ],

        [
            "junit",
            {
                outputFile: "reports/junit.xml"
            }
        ]
    ],

    // -------------------------------------------------
    // Shared Settings
    // -------------------------------------------------
    use: {

        //--------------------------------------------
        // Application
        //--------------------------------------------

        baseURL: process.env.BASE_URL,

        //--------------------------------------------
        // Browser
        //--------------------------------------------

        headless: process.env.HEADLESS === "true",

        viewport: {
            width: 1366,
            height: 768
        },

        ignoreHTTPSErrors: true,

        locale: "en-US",

        timezoneId: "Asia/Kolkata",

        colorScheme: "light",

        //--------------------------------------------
        // Downloads
        //--------------------------------------------

        acceptDownloads: true,

        //--------------------------------------------
        // Timeouts
        //--------------------------------------------

        actionTimeout: 10000,

        navigationTimeout: 30000,

        //--------------------------------------------
        // Evidence Collection
        //--------------------------------------------

        screenshot: "on",

        video: "on",

        trace: "on",

        //--------------------------------------------
        // Launch Options
        //--------------------------------------------

        launchOptions: {

            slowMo: Number(process.env.SLOWMO) || 0

        }

    },

    // -------------------------------------------------
    // Browser Projects
    // -------------------------------------------------
    projects: [

        {
            name: "chromium",

            use: {
                ...devices["Desktop Chrome"]
            }
        }

        // Uncomment if required

        // {
        //     name: "firefox",
        //     use: {
        //         ...devices["Desktop Firefox"]
        //     }
        // },

        // {
        //     name: "webkit",
        //     use: {
        //         ...devices["Desktop Safari"]
        //     }
        // }

    ]

});