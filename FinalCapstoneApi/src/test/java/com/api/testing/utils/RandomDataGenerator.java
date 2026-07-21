package com.api.testing.utils;

import com.api.testing.data.UserTestData;

public class RandomDataGenerator {

    private RandomDataGenerator() {
    }

    public static String generateUsername() {
        return "User" + System.currentTimeMillis();
    }

    public static String generatePassword() {
        return UserTestData.VALID_PASSWORD;
    }
}