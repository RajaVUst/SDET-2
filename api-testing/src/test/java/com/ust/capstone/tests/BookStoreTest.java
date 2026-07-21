package com.ust.capstone.tests;

import com.ust.capstone.clients.BookStoreClient;
import com.ust.capstone.clients.UserClient;
import com.ust.capstone.context.WorldContext;
import com.ust.capstone.data.models.CreateUserResponse;
import com.ust.capstone.data.models.TokenGenResponse;
import com.ust.capstone.data.models.UserRequest;
import com.ust.capstone.data.secrets.Secrets;

import io.restassured.response.Response;
import org.junit.jupiter.api.*;

import static com.ust.capstone.support.spec.response.ResponseSpecs.createdResponse;
import static com.ust.capstone.support.spec.response.ResponseSpecs.okResponse;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BookStoreTest {
    private static WorldContext context;
    private static UserRequest user;

    @BeforeAll
    public static void setUp() {
        context = new WorldContext();
        user = new UserRequest(Secrets.get("NAME"), Secrets.get("PASSWORD"));
    }

    @AfterAll
    public static void tearDown(){
//        UserClient.deleteUser(context.getTokenContext(), context.getUUID());
    }

    @Test
    @Order(1)
    @DisplayName("Create user")
    void createUserTest() {
        CreateUserResponse createUserResponse = UserClient.createUser(user)
                .then()
                .spec(createdResponse()).extract().as(CreateUserResponse.class);
        context.setUUID(createUserResponse.getUserID());

        assertNotNull(createUserResponse.getUserID());
        assertNotNull(createUserResponse.getUsername());
    }

    @Test
    @Order(2)
    @DisplayName("Generate token")
    void generateToken() {
        TokenGenResponse tokenGenResponse = UserClient.login(user)
                .then()
                .spec(okResponse())
                .body("token", notNullValue())
                .extract().as(TokenGenResponse.class);

        assertNotNull(tokenGenResponse.getToken());
        context.setTokenContext(tokenGenResponse.getToken());
    }

    @Test
    @Order(3)
    @DisplayName("Get books")
    void getBooks() {
        Response getBookResponse = BookStoreClient.get(context.getTokenContext())
                .then()
                .spec(okResponse())
                .body("books", notNullValue())
                .extract().response();
    }


//    @Test
//    @Order(4)
//    @DisplayName("Negative 1: tampered token")
//    void tamperedToken() {
//        UserClient.deleteUser(context.getTokenContext() + "tampered", context.getUUID())
//                .then()
//                .statusCode(401)
//                .body("code", notNullValue())
//                .body("message", notNullValue())
//                .extract().response();
//    }
}
