package com.api.testing.tests;

import com.api.testing.base.BaseTest;
import com.api.testing.builder.AccountRequestBuilder;
import com.api.testing.clients.AccountClient;
import com.api.testing.clients.BookStoreClient;
import com.api.testing.data.ErrorMessages;
import com.api.testing.logger.Log;
import com.api.testing.models.request.CreateUserRequest;
import com.api.testing.models.request.GenerateTokenRequest;
import com.api.testing.models.response.BooksResponse;
import com.api.testing.models.response.CreateUserResponse;
import com.api.testing.models.response.TokenResponse;
import com.api.testing.utils.RandomDataGenerator;
import org.testng.Assert;
import org.testng.annotations.Test;

public class DemoQaApiTest extends BaseTest {

    @Test
    public void createUserGenerateTokenAndGetBooks() {

        // Generate Test Data
        String username = RandomDataGenerator.generateUsername();
        String password = RandomDataGenerator.generatePassword();

        Log.logger.info("Generated Username: {}", username);

        // Create User
        CreateUserRequest createUserRequest =
                AccountRequestBuilder.createUser(username, password);

        Log.logger.info("Creating User...");

        CreateUserResponse createUserResponse =
                AccountClient.createUser(createUserRequest);

        Assert.assertNotNull(
                createUserResponse.getUserID(),
                ErrorMessages.USER_ID_NULL
        );

        Log.logger.info("User Created Successfully. User ID: {}",
                createUserResponse.getUserID());

        // Generate Token
        GenerateTokenRequest tokenRequest =
                AccountRequestBuilder.generateToken(username, password);

        Log.logger.info("Generating Token...");

        TokenResponse tokenResponse =
                AccountClient.generateToken(tokenRequest);

        Assert.assertNotNull(
                tokenResponse.getToken(),
                ErrorMessages.TOKEN_NULL
        );

        Log.logger.info("Token Generated Successfully");

        // Get Books
        Log.logger.info("Retrieving Books...");

        BooksResponse booksResponse =
                BookStoreClient.getBooks(tokenResponse.getToken());

        Assert.assertFalse(
                booksResponse.getBooks().isEmpty(),
                ErrorMessages.BOOKS_EMPTY
        );

        Log.logger.info("Books Retrieved Successfully. Total Books: {}",
                booksResponse.getBooks().size());
    }
}