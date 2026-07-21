package com.apitesting.testData;

import com.apitesting.config.Config;
import java.util.Map;

public class UserData {

    public static Map<String, String> userData(){

      return Map.of("userName",Config.userName,"password",Config.password);

    }

}
