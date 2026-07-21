package com.api.testing.specs;

import com.api.testing.config.Config;
import io.qameta.allure.restassured.AllureRestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;

public class RequestSpecs {

    private RequestSpecs() {
    }

    public static RequestSpecification getRequestSpec() {

        return new RequestSpecBuilder()
                .setBaseUri(Config.get("BASE_URL"))
                .setContentType(ContentType.JSON)
                .addFilter(new AllureRestAssured())
                .build();
    }

}