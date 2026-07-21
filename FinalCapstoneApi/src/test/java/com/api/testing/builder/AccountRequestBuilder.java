package com.api.testing.builder;

import com.api.testing.models.request.CreateUserRequest;
import com.api.testing.models.request.GenerateTokenRequest;

public final class AccountRequestBuilder {

    private AccountRequestBuilder() {
    }

    public static CreateUserRequest createUser(String username, String password) {
        CreateUserRequest request = new CreateUserRequest();
        request.setUserName(username);
        request.setPassword(password);
        return request;
    }

    public static GenerateTokenRequest generateToken(String username, String password) {
        GenerateTokenRequest request = new GenerateTokenRequest();
        request.setUserName(username);
        request.setPassword(password);
        return request;
    }
}