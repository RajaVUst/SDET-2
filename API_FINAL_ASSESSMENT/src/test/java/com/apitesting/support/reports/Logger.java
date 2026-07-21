package com.apitesting.support.reports;

import io.qameta.allure.Allure;
import org.slf4j.LoggerFactory;

public class Logger {
    private static final org.slf4j.Logger log = LoggerFactory.getLogger(Logger.class);

    public static void step(String message) {
        log.info("[INFO] {}", message);
        Allure.step(message);
    }


    public static void info(String key, Object value) {
        String safeValue = isSensitive(key) ? "[SENSITIVE]" : String.valueOf(value);
        log.info("[INFO] {} : {}", key, safeValue);
        Allure.step("[INFO] : " + key + " = " + safeValue);
    }

    private static boolean isSensitive(String key) {
        if (key == null) return false;
        String k = key.toLowerCase();
        return k.contains("token") || k.contains("secret")
                || k.contains("password") || k.contains("auth");
    }
}