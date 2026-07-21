package com.sdet.Api_test.data.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;


@JsonIgnoreProperties(ignoreUnknown = true)


public record BookDetailsResponse(
        List<Books> books )
{}
