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
  "duration": 4067847513,
  "status": "passed"
});
formatter.before({
  "duration": 2152882706,
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
  "duration": 8495050944,
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
  "duration": 205042614,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_login()"
});
formatter.result({
  "duration": 3227811748,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 12977211,
  "status": "passed"
});
formatter.after({
  "duration": 630081202,
  "status": "passed"
});
formatter.after({
  "duration": 1796317321,
  "status": "passed"
});
formatter.before({
  "duration": 3676553858,
  "status": "passed"
});
formatter.before({
  "duration": 2130190943,
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
  "duration": 10219793858,
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
  "duration": 210679730,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_login()"
});
formatter.result({
  "duration": 3044010959,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 9991670,
  "status": "passed"
});
formatter.after({
  "duration": 628774559,
  "status": "passed"
});
formatter.after({
  "duration": 1437656175,
  "status": "passed"
});
formatter.uri("logintestagain.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature For UPS",
  "description": "This login feature is for login functionality",
  "id": "login-feature-for-ups",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login with wrong user name and pass",
  "description": "",
  "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass",
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
  "name": "I navigated- to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered- wrong \"\u003cuserid\u003e\" \u0026 \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click- on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive- an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 12,
      "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;;1"
    },
    {
      "cells": [
        "user1",
        "password1"
      ],
      "line": 13,
      "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;;2"
    },
    {
      "cells": [
        "user2",
        "password2"
      ],
      "line": 14,
      "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3674038868,
  "status": "passed"
});
formatter.before({
  "duration": 1916876217,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login with wrong user name and pass",
  "description": "",
  "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;;2",
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
  "name": "I navigated- to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered- wrong \"user1\" \u0026 \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click- on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive- an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsAgain.i_navigated_to_ups_login_page()"
});
formatter.result({
  "duration": 8201005049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 18
    },
    {
      "val": "password1",
      "offset": 28
    }
  ],
  "location": "LoginStepsAgain.i_entered_wrong_user_and_password(String,String)"
});
formatter.result({
  "duration": 205551060,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsAgain.i_click_on_login()"
});
formatter.result({
  "duration": 3062225003,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsAgain.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 9791924,
  "status": "passed"
});
formatter.after({
  "duration": 637737495,
  "status": "passed"
});
formatter.after({
  "duration": 1585853521,
  "status": "passed"
});
formatter.before({
  "duration": 3668058314,
  "status": "passed"
});
formatter.before({
  "duration": 1876029622,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with wrong user name and pass",
  "description": "",
  "id": "login-feature-for-ups;login-with-wrong-user-name-and-pass;;3",
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
  "name": "I navigated- to ups login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I entered- wrong \"user2\" \u0026 \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click- on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should receive- an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsAgain.i_navigated_to_ups_login_page()"
});
formatter.result({
  "duration": 8842600496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 18
    },
    {
      "val": "password2",
      "offset": 28
    }
  ],
  "location": "LoginStepsAgain.i_entered_wrong_user_and_password(String,String)"
});
formatter.result({
  "duration": 187251748,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsAgain.i_click_on_login()"
});
formatter.result({
  "duration": 3530721890,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsAgain.i_should_receive_an_error_message()"
});
formatter.result({
  "duration": 10188654,
  "status": "passed"
});
formatter.after({
  "duration": 621047604,
  "status": "passed"
});
formatter.after({
  "duration": 1444616514,
  "status": "passed"
});
});