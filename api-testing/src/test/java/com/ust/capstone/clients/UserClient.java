package com.ust.capstone.clients;

import com.ust.capstone.data.models.UserRequest;
import io.restassured.response.Response;

import java.util.Map;

import static com.ust.capstone.support.spec.request.RequestSpecs.*;
import static io.restassured.RestAssured.given;

public class UserClient {
    public static Response login(UserRequest user) {
        var data = Map.of("userName", user.getName(), "password", user.getPassword());
        return given()
                .spec(requestSpec())
                .body(data)
                .when()
                .post("/GenerateToken");
    }

    public static Response createUser(UserRequest user) {
        var data = Map.of("userName", user.getName(), "password", user.getPassword());
        return given()
                .spec(requestSpec())
                .body(data)
                .when()
                .post("/User");
    }

    public static Response deleteUser(String token, String UUID) {
        return given()
                .spec(deleteReqSpec(token))
                .pathParam("UUID", UUID)
                .when()
                .delete("/User/{UUID}");
    }
}
