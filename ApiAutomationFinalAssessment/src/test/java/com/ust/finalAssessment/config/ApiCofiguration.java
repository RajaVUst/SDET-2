package com.ust.finalAssessment.config;
import io.github.cdimascio.dotenv.Dotenv;

public class ApiCofiguration {
    static Dotenv dotenv = Dotenv.configure()
            .ignoreIfMissing()
            .load();

    public static final String BASE_URL = getRequired("BASE_URL");

    private static String getRequired(String key) {
        String value = dotenv.get(key);
        if (value == null) {
            value = System.getenv(key);
        }
        if (value == null) {
            throw new IllegalStateException("Missing required environment variable: " + key);
        }
        return value;
    }
}
