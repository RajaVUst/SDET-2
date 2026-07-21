package com.api.testing.utils;

public class TokenManager {

    private static String token;

    private TokenManager() {}

    public static void setToken(String authToken) {
        token = authToken;
    }

    public static String getToken() {
        return token;
    }
}