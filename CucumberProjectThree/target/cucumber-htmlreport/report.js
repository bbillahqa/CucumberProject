$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Ups Login Feature",
  "description": "This login feature is for login functionality in UPS website",
  "id": "ups-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login with wrong user id and password",
  "description": "",
  "id": "ups-login-feature;login-with-wrong-user-id-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@chrome"
    },
    {
      "line": 4,
      "name": "@firefox"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigated to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered wrong \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "ups-login-feature;login-with-wrong-user-id-and-password;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 12,
      "id": "ups-login-feature;login-with-wrong-user-id-and-password;;1"
    },
    {
      "cells": [
        "user1",
        "password1"
      ],
      "line": 13,
      "id": "ups-login-feature;login-with-wrong-user-id-and-password;;2"
    },
    {
      "cells": [
        "user2",
        "password2"
      ],
      "line": 14,
      "id": "ups-login-feature;login-with-wrong-user-id-and-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2214791200,
  "status": "passed"
});
formatter.before({
  "duration": 4096522238,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with wrong user id and password",
  "description": "",
  "id": "ups-login-feature;login-with-wrong-user-id-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@firefox"
    },
    {
      "line": 4,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigated to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered wrong \"user1\" and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigated_to_ups_login_page()"
});
formatter.result({
  "duration": 12431748821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 17
    },
    {
      "val": "password1",
      "offset": 29
    }
  ],
  "location": "LoginSteps.i_entered_wrong_user_and_password(String,String)"
});
formatter.result({
  "duration": 216336670,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_login()"
});
formatter.result({
  "duration": 3345703809,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 11272658,
  "status": "passed"
});
formatter.after({
  "duration": 614578584,
  "status": "passed"
});
formatter.after({
  "duration": 1388550649,
  "status": "passed"
});
formatter.before({
  "duration": 1864070828,
  "status": "passed"
});
formatter.before({
  "duration": 3721239345,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with wrong user id and password",
  "description": "",
  "id": "ups-login-feature;login-with-wrong-user-id-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@firefox"
    },
    {
      "line": 4,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigated to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered wrong \"user2\" and \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_navigated_to_ups_login_page()"
});
formatter.result({
  "duration": 9282511628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 17
    },
    {
      "val": "password2",
      "offset": 29
    }
  ],
  "location": "LoginSteps.i_entered_wrong_user_and_password(String,String)"
});
formatter.result({
  "duration": 210635601,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_login()"
});
formatter.result({
  "duration": 3343685025,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 12903396,
  "status": "passed"
});
formatter.after({
  "duration": 614699774,
  "status": "passed"
});
formatter.after({
  "duration": 1323337711,
  "status": "passed"
});
});