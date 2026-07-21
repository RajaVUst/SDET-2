package com.ust.capstone.data.models;

import java.util.List;

public class CreateUserResponse {
    String userID;
    String username;
    List<Book> books;

    public String getUserID() {
        return userID;
    }

    public String getUsername() {
        return username;
    }

    public List<Book> getBooks() {
        return books;
    }
}
