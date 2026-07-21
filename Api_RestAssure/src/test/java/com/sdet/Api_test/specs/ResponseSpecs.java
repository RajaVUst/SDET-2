package com.sdet.Api_test.specs;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;


public class ResponseSpecs {


     public static ResponseSpecification ok=
             new ResponseSpecBuilder()
                     .expectStatusCode(200)
                     .expectContentType(ContentType.JSON)
                     .build();

    public static ResponseSpecification created=
         new ResponseSpecBuilder()
                .expectStatusCode(201)
                .expectContentType(ContentType.JSON)
                .build();
    }






