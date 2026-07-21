package com.ust.capstone.support.config;

import com.ust.capstone.data.secrets.Secrets;

public final class AppConfig {

    private AppConfig() {
    }

    public static final String BASE_URL =
            Secrets.get("BASE_URL");
}