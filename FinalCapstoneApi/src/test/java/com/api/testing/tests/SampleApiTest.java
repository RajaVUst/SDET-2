package com.api.testing.tests;

import io.restassured.RestAssured;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class SampleApiTest {

    @Test
    public void sampleGetTest() {

        RestAssured.baseURI = "https://jsonplaceholder.typicode.com";

        given()
                .log().all()
                .when()
                .get("/posts/1")
                .then()
                .log().all()
                .statusCode(200);
    }
}