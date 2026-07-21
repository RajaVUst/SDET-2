package com.api.testing.config;

import io.github.cdimascio.dotenv.Dotenv;

public class Config {

    private static final Dotenv dotenv = Dotenv.configure()
            .ignoreIfMissing()
            .load();

    public static String get(String key) {

        String env = System.getenv(key);

        if (env != null && !env.isBlank()) {
            return env;
        }

        return dotenv.get(key);
    }

}