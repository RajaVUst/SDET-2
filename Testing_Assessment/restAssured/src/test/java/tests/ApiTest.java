package tests;

import api.clients.AuthClient;
import api.clients.BookClient;
import api.specs.ResponseSpecs;
import builders.RequestBuilder;
import config.Config;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.isEmptyOrNullString;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.notNullValue;

class ApiTest {

    private final AuthClient authClient = new AuthClient();
    private final BookClient bookClient = new BookClient();

    @Test
    void shouldCreateUserGenerateTokenAndGetBooks() {
        String username = "username_" + UUID.randomUUID().toString().replace("-", "");
        var request = new RequestBuilder()
                .withUserName(username)
                .withPassword(Config.USER_PASSWORD)
                .build();

        Response createUserResponse = authClient.createUser(request);

        createUserResponse.then()
                .log().ifValidationFails()
                .spec(ResponseSpecs.success())
                .statusCode(201)
                .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/create-user-schema.json"))
                .body("userID", notNullValue())
                .body("username", equalTo(username));

        Response tokenResponse = authClient.generateToken(request);

        tokenResponse.then()
                .log().ifValidationFails()
                .spec(ResponseSpecs.success())
                .statusCode(200)
                .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/generate-token-schema.json"))
                .body("token", notNullValue());

        String token = tokenResponse.jsonPath().getString("token");
        Response booksResponse = bookClient.getBooks(token);

        booksResponse.then()
                .log().ifValidationFails()
                .spec(ResponseSpecs.success())
                .statusCode(200)
                .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/books-schema.json"))
                .body("books", not(empty()))
                .body("books.title", everyItem(notNullValue()));
    }
}
