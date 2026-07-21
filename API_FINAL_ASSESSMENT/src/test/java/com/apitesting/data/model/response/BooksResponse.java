package com.apitesting.data.model.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record BooksResponse (String isbn,String title,String subTitle,String author,String publish_date,String publisher,int pages, String description,String website){
}
