package com.ust.capstone.support.spec.response;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.ResponseSpecification;

public class ResponseSpecs {
    public static ResponseSpecification createdResponse() {

        return new ResponseSpecBuilder()
                .expectStatusCode(201)
                .build();
    }

    public static ResponseSpecification okResponse() {

        return new ResponseSpecBuilder()
                .expectStatusCode(200)
                .build();
    }
}
