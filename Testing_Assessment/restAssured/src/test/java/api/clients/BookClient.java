package api.clients;

import api.specs.RequestSpecs;
import config.Endpoints;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class BookClient {

    public Response getBooks(String token) {
        return given()
                .spec(RequestSpecs.unauthenticated())
                .header("Authorization", "Bearer " + token)
                .when()
                .get(Endpoints.GET_BOOKS);
    }

}
