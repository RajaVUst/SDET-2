package com.sdet.Api_test.support;
import com.sdet.Api_test.config.Config;
import com.sdet.Api_test.testData.PrivateUserdata;
import static io.restassured.RestAssured.given;
import static com.sdet.Api_test.specs.ResponseSpecs.*;
public class TokenManager {

    private static String token;

    public static String getToken() {

        if (token == null) {

            token = given()
                    .baseUri(Config.BASE_URL)
                    .contentType("application/json")
                    .body(PrivateUserdata.getTok())
                    .post("/Account/V1/GenerateToken")
                    .then()
                    .spec(ok)
                    .extract()
                    .path("token");
        }

        return token;
    }
}