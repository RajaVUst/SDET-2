package com.ust.capstone.data.secrets;

import com.ust.capstone.support.config.Env;

public final class Secrets {

    private Secrets() {
    }

    public static String get(String key) {
        return Env.get(key);
    }
}
