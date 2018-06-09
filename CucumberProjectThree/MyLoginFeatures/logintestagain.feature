Feature: Login Feature For UPS 
  This login feature is for login functionality

  @chrome @firefox
  Scenario Outline: Login with wrong user name and pass
    Given I navigated- to ups login page
    And I entered- wrong "<userid>" & "<password>"
    When I click- on login
    Then I should receive- an error message

    Examples: 
      | userid     | password     |
      | user1      | password1    |
      | user2      | password2    |
      

  
  