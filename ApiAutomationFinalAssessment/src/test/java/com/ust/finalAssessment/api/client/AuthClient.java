package com.ust.finalAssessment.api.client;

import io.restassured.response.Response;

import java.util.Map;
import java.util.Objects;

import static com.ust.finalAssessment.factory.RequestSpecFactory.*;

import static io.restassured.RestAssured.given;

public class AuthClient {

    public Response create_User(String username ,String password)
    {
        return given()
                .spec(authRequest)
                .body(Map.of(
                        "userName", Objects.requireNonNull(username, "username must not be null"),
                        "password", Objects.requireNonNull(password, "password must not be null")
                ))
                .when()
                .post("/User");
    }


    public Response login_generate_Token(String email,
                          String password) {

        return given()
                .spec(authRequest)
                .body(Map.of(
                        "userName", Objects.requireNonNull(email, "email must not be null"),
                        "password", Objects.requireNonNull(password, "password must not be null")
                ))
                .when()
                .post("/GenerateToken");
    }


}