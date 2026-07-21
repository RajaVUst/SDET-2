package com.apitesting.client;

import com.apitesting.support.builders.ApiSpecBuilder;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookClient {

        public Response getBooks(String token){

            return given()
                    .spec(ApiSpecBuilder.reqSpecget(token))
                    .when()
                    .get("/BookStore/v1/Books");
        }

}
