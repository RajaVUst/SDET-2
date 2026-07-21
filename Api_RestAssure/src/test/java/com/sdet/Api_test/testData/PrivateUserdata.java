package com.sdet.Api_test.testData;

import com.sdet.Api_test.config.Config;

import java.util.Map;

public class PrivateUserdata {
    public static Map<String, String> getTok() {
        return tok;
    }

    public static Map<String,String> tok= Map.of("userName", Config.TEST_USERNAME,"password",Config.PASSWORD);
}
