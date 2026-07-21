package com.api.testing.clients;

import com.api.testing.constants.ApiEndpoints;
import com.api.testing.models.response.BooksResponse;
import com.api.testing.specs.RequestSpecs;
import io.restassured.RestAssured;

public class BookStoreClient {

    private BookStoreClient() {}

    public static BooksResponse getBooks(String token) {

        return RestAssured
                .given()
                .spec(RequestSpecs.getRequestSpec())
                .header("Authorization", "Bearer " + token)

                .when()
                .get(ApiEndpoints.GET_BOOKS)

                .then()
                .extract()
                .as(BooksResponse.class);
    }

}