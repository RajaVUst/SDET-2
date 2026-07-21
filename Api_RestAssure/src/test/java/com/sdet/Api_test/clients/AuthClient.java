package com.sdet.Api_test.clients;

import com.sdet.Api_test.config.Config;
import com.sdet.Api_test.data.models.CreateUserRequest;
import static com.sdet.Api_test.specs.RequestSpecs.*;
import io.restassured.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static io.restassured.RestAssured.given;

public class AuthClient {

    private static final Logger log = LoggerFactory.getLogger(AuthClient.class);

    public Response login(CreateUserRequest request) {

        return given()
                .spec(account)
                .post("/User");
    }


}