package com.api.testing.clients;

import com.api.testing.constants.ApiEndpoints;
import com.api.testing.models.request.CreateUserRequest;
import com.api.testing.models.request.GenerateTokenRequest;
import com.api.testing.models.response.CreateUserResponse;
import com.api.testing.models.response.TokenResponse;
import com.api.testing.specs.RequestSpecs;
import io.restassured.RestAssured;

public class AccountClient {

    private AccountClient() {}

    public static CreateUserResponse createUser(CreateUserRequest request) {

        return RestAssured
                .given()
                .spec(RequestSpecs.getRequestSpec())
                .body(request)

                .when()
                .post(ApiEndpoints.CREATE_USER)

                .then()
                .extract()
                .as(CreateUserResponse.class);
    }

    public static TokenResponse generateToken(GenerateTokenRequest request) {

        return RestAssured
                .given()
                .spec(RequestSpecs.getRequestSpec())
                .body(request)

                .when()
                .post(ApiEndpoints.GENERATE_TOKEN)

                .then()
                .extract()
                .as(TokenResponse.class);
    }

}