package com.sdet.Api_test.config;

import io.github.cdimascio.dotenv.Dotenv;

public class Config {

    public static final Dotenv dotenv = Dotenv.load();

    public static final String BASE_URL = dotenv.get("BASE_URL");

    public static final String TEST_USERNAME = dotenv.get("TEST_USERNAME");

    public static final String PASSWORD = dotenv.get("PASSWORD");


}