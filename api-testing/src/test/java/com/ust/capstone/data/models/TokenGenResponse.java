package com.ust.capstone.data.models;

public class TokenGenResponse {
    String token;
    String expires;
    String status;
    String result;

    public String getToken() {
        return token;
    }

    public String getExpires() {
        return expires;
    }

    public String getStatus() {
        return status;
    }

    public String getResult() {
        return result;
    }
}
