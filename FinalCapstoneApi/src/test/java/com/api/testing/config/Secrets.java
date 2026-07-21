package com.api.testing.config;

public class Secrets {

    private Secrets() {}

    public static final String USERNAME = Config.get("API_USERNAME");

    public static final String PASSWORD = Config.get("API_PASSWORD");

}