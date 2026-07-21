package api.clients;

import api.specs.RequestSpecs;
import config.Endpoints;
import io.restassured.response.Response;
import models.RequestModel;

import static io.restassured.RestAssured.given;

public class AuthClient {

    public Response createUser(RequestModel request) {
        return given()
                .spec(RequestSpecs.unauthenticated())
                .body(request)
                .when()
                .post(Endpoints.CREATE_USER);
    }

    public Response generateToken(RequestModel request){
        return given()
                .spec(RequestSpecs.unauthenticated())
                .body(request)
                .when()
                .post(Endpoints.GENERATE_TOKEN);
    }

}
