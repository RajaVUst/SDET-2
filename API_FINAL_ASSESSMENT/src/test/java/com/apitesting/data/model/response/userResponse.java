    package com.apitesting.data.model.response;

    import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record userResponse(String code,String message) {
    }
