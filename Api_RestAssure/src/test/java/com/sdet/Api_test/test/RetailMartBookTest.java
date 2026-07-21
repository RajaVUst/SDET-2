package com.sdet.Api_test.test;

import com.sdet.Api_test.clients.AuthClient;
import com.sdet.Api_test.clients.BookDetailsClient;
import com.sdet.Api_test.config.Config;
import com.sdet.Api_test.data.models.BookDetailsResponse;
import com.sdet.Api_test.data.models.CreateUserRequest;
import com.sdet.Api_test.support.GenerateLog;
import com.sdet.Api_test.support.TokenManager;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import static com.sdet.Api_test.specs.ResponseSpecs.*;
import org.junit.jupiter.api.Test;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


public class RetailMartBookTest {
    public static String token;
    @BeforeAll
    @DisplayName("create the user")
    static void createUser()
    {
        AuthClient auth = new AuthClient();
        GenerateLog.step("Created a new user with username and Password");
        CreateUserRequest request = new CreateUserRequest(Config.TEST_USERNAME,Config.PASSWORD);


        Response response =
                auth.login(request);

        response.then()
                .body("code",notNullValue());


    }
    @BeforeEach
    @DisplayName("Generate token for the user")
    void genToken()
    {
        token= TokenManager.getToken();
        GenerateLog.info("User Token Created",token);
    }
    @Test
    @DisplayName("Validate the Book Details")
    void getBooks()

    {
        BookDetailsClient books = new BookDetailsClient();
        GenerateLog.step("New Book Client is created ");

        Response response =
                books.BookDetails(token);



        BookDetailsResponse booksResponse =
                response.as(BookDetailsResponse.class);

        GenerateLog.step("Generated Book details response");

        response.then()
                .spec(ok);
        assertThat(booksResponse.books().getFirst().isbn(),notNullValue());
        assertThat(booksResponse.books().getFirst().title(),notNullValue());
        assertThat(booksResponse.books().getFirst().pages(),greaterThan(0));


    }



}