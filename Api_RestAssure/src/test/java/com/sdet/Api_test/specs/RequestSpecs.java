package com.sdet.Api_test.specs;

import com.sdet.Api_test.config.Config;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;

public class RequestSpecs {

    public static RequestSpecification account
        = new RequestSpecBuilder()
                .setBaseUri(Config.BASE_URL)
                .setContentType("Account/v1")
                .setAccept("application/json")
                .build();
    }



