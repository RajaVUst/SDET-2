package com.sdet.Api_test.data.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Books (String isbn,String title,int pages)
{


}
