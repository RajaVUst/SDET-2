package com.apitesting.client;

import com.apitesting.support.builders.ApiSpecBuilder;
import com.apitesting.testData.UserData;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class userClient {

    public Response getUser(){

        return given()
                .spec(ApiSpecBuilder.reqSpecpost())
                .body(UserData.userData())
                .when()
                .post("/Account/v1/User");


    }

    public Response GenerateToken(){

        return given()
                .spec(ApiSpecBuilder.reqSpecpost())
                .body(UserData.userData())
                .when()
                .post("/Account/v1/GenerateToken");


    }

}
