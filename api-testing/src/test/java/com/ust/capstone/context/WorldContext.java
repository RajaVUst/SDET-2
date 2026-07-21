package com.ust.capstone.context;

public class WorldContext {
    private String tokenContext;
    private String UUID;

    public String getUUID() {
        return UUID;
    }

    public void setUUID(String UUID) {
        this.UUID = UUID;
    }

    public String getTokenContext() {
        return tokenContext;
    }

    public void setTokenContext(String token) {
        this.tokenContext = token;
    }
}
