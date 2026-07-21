package builders;

import models.RequestModel;

public class RequestBuilder {

    private String userName;
    private String password;

    public RequestBuilder withUserName(String userName) {
        this.userName=userName;
        return this;
    }

    public RequestBuilder withPassword(String password) {
        this.password = password;
        return this;
    }

    public RequestModel build() {
        return new RequestModel(userName, password);
    }
}
