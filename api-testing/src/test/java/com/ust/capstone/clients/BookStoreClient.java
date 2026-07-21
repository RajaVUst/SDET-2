package com.ust.capstone.clients;

import com.ust.capstone.data.models.UserRequest;
import io.restassured.response.Response;

import java.util.Map;

import static com.ust.capstone.support.spec.request.RequestSpecs.authedSpec;
import static com.ust.capstone.support.spec.request.RequestSpecs.requestSpec;
import static io.restassured.RestAssured.given;

public class BookStoreClient {
    public static Response get(String token) {
        return given()
                .spec(authedSpec(token))
                .when()
                .get("/Books");
    }
}
