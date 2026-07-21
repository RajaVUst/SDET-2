package com.api.testing.base;

import com.api.testing.specs.RequestSpecs;
import io.restassured.RestAssured;
import org.testng.annotations.BeforeMethod;

public class BaseTest {

    @BeforeMethod
    public void setUp() {

        RestAssured.requestSpecification =
                RequestSpecs.getRequestSpec();

    }
}