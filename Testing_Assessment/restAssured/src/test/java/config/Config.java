package config;

public final class Config {

    private Config() {
    }

    public static final String BACKEND_BASE_URL = AppConfig.get("BOOKSTORE_BASE_URL", "https://demoqa.com");
    public static final String USER_PASSWORD = AppConfig.get("PASSWORD");

}
