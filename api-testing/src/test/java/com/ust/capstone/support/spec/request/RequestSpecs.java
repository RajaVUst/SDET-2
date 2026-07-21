package com.ust.capstone.support.spec.request;

import com.ust.capstone.support.config.AppConfig;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RequestSpecs {
    public static RequestSpecification authedSpec(String token) {
        return new RequestSpecBuilder()
                .setBaseUri(AppConfig.BASE_URL)
                .setBasePath("/BookStore/v1")
                .setContentType("application/json")
                .setAccept("application/json")
                .addHeader("Authorization","Bearer " + token)
                .build();
    }

    public static RequestSpecification requestSpec() {
        return new RequestSpecBuilder()
                .setBaseUri(AppConfig.BASE_URL)
                .setBasePath("/Account/v1")
                .setContentType("application/json")
                .setAccept("application/json")
                .build();
    }

    public static RequestSpecification deleteReqSpec(String token) {
        return new RequestSpecBuilder()
                .setBaseUri(AppConfig.BASE_URL)
                .setBasePath("/Account/v1")
                .setContentType("application/json")
                .setAccept("application/json")
                .addHeader("Authorization","Bearer " + token)
                .build();
    }
}
