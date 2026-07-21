package com.apitesting.config;
import io.github.cdimascio.dotenv.Dotenv;

public class Config {

    public static Dotenv dotenv = Dotenv.load();

    public static final String baseurl =
            dotenv.get("BASE_URL");

    public static final String userName =
            dotenv.get("USERNAME");

    public static final String password =
            dotenv.get("PASSWORD");

}