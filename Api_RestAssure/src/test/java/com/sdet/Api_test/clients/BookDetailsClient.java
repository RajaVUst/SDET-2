package com.sdet.Api_test.clients;

import com.sdet.Api_test.config.Config;
import com.sdet.Api_test.data.models.CreateUserRequest;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookDetailsClient {

    public Response BookDetails(String tok) {

        return given()
                .baseUri(Config.BASE_URL)
                .contentType("application/json")
                .header("Authorization","Bearer "+tok)
                .get("/BookStore/v1/Books");
    }
}
