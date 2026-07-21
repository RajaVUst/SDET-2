package com.ust.finalAssessment.tests;


import com.ust.finalAssessment.api.client.AuthClient;
import com.ust.finalAssessment.api.client.BookClient;
import com.ust.finalAssessment.report.ExtentTestListener;
import io.github.cdimascio.dotenv.Dotenv;
import io.qameta.allure.*;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;

import static com.ust.finalAssessment.factory.ResponseSpecFactory.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;


@Epic("tripStack Journeys")
@Feature("Full Booking Journey")
@Owner("Shahbaz Ahmad")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@ExtendWith(ExtentTestListener.class)
public class DemoQATest {
    static Dotenv dotenv =Dotenv.load();
    AuthClient authClient =new AuthClient();
    BookClient bookClient = new BookClient();
    private final String username = dotenv.get("USER_NAME");
    private final String password = dotenv.get("USER_PASSWORD");
    private static String token ;
    private String id = (Double.toString(Math.random()*1000001));

    @Test
    @Order(0)
    @DisplayName("create a user with user name and password")
    @Story("user create - generate token - get list of book")
    @Severity(SeverityLevel.CRITICAL)
    void create_user_with_Credentials()
    {
        Response response =authClient.create_User(username+id,password)
                .then()
                .spec(authResponse)
                .extract()
                .response();
        JsonPath jsonPath= response.jsonPath();
        assertThat(jsonPath.getString("username"),equalTo(username+id));
        assertThat(jsonPath.getList("books").size(),equalTo(0));
    }


    @Test
    @Order(1)
    @DisplayName("Generate token")
    @Story("user create - generate token - get list of book")
    @Severity(SeverityLevel.CRITICAL)
    void generate_Token()
    {
        Response response =authClient.login_generate_Token(username,password)
                .then()
                .spec(jsonResponse)
                .extract()
                .response();

        JsonPath jsonPath= response.jsonPath();

        token = jsonPath.getString("token");

        assertThat(jsonPath.getString("status"),equalTo("Success"));
        assertThat(jsonPath.getString("result"),equalTo("User authorized successfully."));
    }


    @Test
    @Order(2)
    @DisplayName("Get list of Book by using token")
    @Story("user create - generate token - get list of book")
    @Severity(SeverityLevel.NORMAL)
    void getList_Of_Book()
    {
        Response response =bookClient.getListOfBook(token)
                .then()
                .spec(jsonResponse)
                .extract()
                .response();

        JsonPath jsonPath= response.jsonPath();

        var list = jsonPath.getList("books");

        assertThat(list.size(),greaterThanOrEqualTo(0));
    }
}

//   "books": [
//           {
//           "isbn": "9781449325862",
//           "title": "Git Pocket Guide",
//           "subTitle": "A Working Introduction",
//           "author": "Richard E. Silverman",
//           "publish_date": "2020-06-04T08:48:39.000Z",
//           "publisher": "O'Reilly Media",
//           "pages": 234,
//           "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
//           "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
//           },