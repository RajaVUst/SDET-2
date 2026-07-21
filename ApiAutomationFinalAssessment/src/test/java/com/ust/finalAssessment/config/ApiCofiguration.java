package com.ust.finalAssessment.config;
import io.github.cdimascio.dotenv.Dotenv;


public class ApiCofiguration {
    static Dotenv dotenv =Dotenv.load();

    public static final String BASE_URL =dotenv.get("BASE_URL");
}
