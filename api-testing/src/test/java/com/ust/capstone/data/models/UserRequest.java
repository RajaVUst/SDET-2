package com.ust.capstone.data.models;

public class UserRequest {
    String username;
    String password;

    public UserRequest(String username, String password){
        this.username=username;
        this.password=password;
    }

    public String getName() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
