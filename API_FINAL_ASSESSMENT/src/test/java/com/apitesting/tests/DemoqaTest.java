package com.apitesting.tests;

import com.apitesting.client.BookClient;
import com.apitesting.client.userClient;
import com.apitesting.data.model.response.BooksResponse;
import com.apitesting.data.model.response.TokenResponse;
import com.apitesting.data.model.response.userResponse;
import com.apitesting.support.builders.ApiSpecBuilder;
import com.apitesting.support.reports.Logger;
import com.apitesting.testData.UserData;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DemoqaTest {

    public static userClient userclient;
    public static BookClient bookclient;

    @BeforeAll
    static void setup()
    {
        Logger.step("String Client");

        userclient=new userClient();
        bookclient = new BookClient();
    }

    @Test
    @DisplayName("User Generation")
    void userGenerate() {

        Logger.step("Collecting User Data");

        Response response=userclient.getUser();

        userResponse userRes = response.as(userResponse.class);

        if(response.statusCode()==201) {

            Logger.step("User created successfully");

            userResponse userRes1 = response.as(userResponse.class);

        }
        else if(response.statusCode()==406) {

            Logger.step("User already exists");
            assertThat(userRes.code(),not(isEmptyString()));
            assertThat(userRes.message(),not(isEmptyString()));
            assertEquals("User exists!",userRes.message());

        }

        Logger.step("Successfully Collected User Data");

    }

    @Test
    @DisplayName("Token Generation")
    void userGenerateToken()
    {
        Logger.step("Generating Token");

        TokenResponse tokenResponse =userclient.GenerateToken()
                .then()
                .spec(ApiSpecBuilder.resSpecpostCreated())
                .extract().as(TokenResponse.class);

        Logger.step("Token Generated Successfully");

        assertThat(tokenResponse.expires(),not(isEmptyString()));
        assertThat(tokenResponse.token(),not(isEmptyString()));
        assertThat(tokenResponse.result(),not(isEmptyString()));
        assertThat(tokenResponse.status(),not(isEmptyString()));
        assertEquals("Success",tokenResponse.status());
        assertEquals("User authorized successfully.",tokenResponse.result());


    }

    @Test
    @DisplayName("Getting Books")
    void BookDetails()
    {

        Logger.step("Generating Token");

        Response res =userclient.GenerateToken();

        userResponse tokenResponse=
                res.then()
                .spec(ApiSpecBuilder.resSpecpostCreated())
                .extract().as(userResponse.class);

        Logger.step("Token Generated Successfully");


        Logger.step("Storing generated Token");

        String activeToken = res.path("token");

        Logger.info("Token Generated:",activeToken);


        Logger.step("Fetching Book Details");

        BooksResponse bookResponse =bookclient.getBooks(activeToken)
                .then()
                .spec(ApiSpecBuilder.resSpecpostCreated())
                .body(matchesJsonSchemaInClasspath("schemas/json/Books.schemas.json"))
                .extract().as(BooksResponse.class);

        Logger.step("Successfully Book Details");

        assertThat(bookResponse.isbn(),not(isEmptyString()));
        assertThat(bookResponse.title(),not(isEmptyString()));
        assertThat(bookResponse.description(),not(isEmptyString()));
        assertThat(bookResponse.website(),not(isEmptyString()));



//        assertTrue()
    }



}
