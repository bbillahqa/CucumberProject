package login.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import login.page.LoginPage;
import login.utility.LoginHook;

public class LoginSteps {
	
	private WebDriver chromeDriver = LoginHook.getChromeDriver();
	private WebDriver fireDriver = LoginHook.getFireDriver();
	LoginPage chrome = new LoginPage(chromeDriver);
	LoginPage fire = new LoginPage(fireDriver);

	@Given("^I navigated to ups login page$")
	public void i_navigated_to_ups_login_page() throws Throwable {
		// Chrome Browser
		chromeDriver.get(
				"https://www.ups.com/lasso/login?loc=en_US&returnto=https%3A%2F%2Fwww.ups.com%2Fus%2Fen%2FHome.page");
		chromeDriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		// Firefox Browser
		fireDriver.get(
				"https://www.ups.com/lasso/login?loc=en_US&returnto=https%3A%2F%2Fwww.ups.com%2Fus%2Fen%2FHome.page");
		fireDriver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Given("^I entered wrong \"(.*)\" and \"(.*)\"$")
	public void i_entered_wrong_user_and_password(String userid, String password) throws Throwable {
		
		chrome.userID().sendKeys(userid);
		chrome.password().sendKeys(password);
		fire.userID().sendKeys(userid);
		fire.password().sendKeys(password);
	}

	@When("^I click on login$")
	public void i_click_on_login() throws Throwable {

		chrome.submit().click();
		fire.submit().click();

	}

	@Then("^I should receive an error message$")
	public void i_should_receive_an_error_message() throws Throwable {

		String actual1 = chromeDriver.getCurrentUrl();
		Assert.assertNotEquals(actual1, "https://www.ups.com/us/en/Home.page");

		String actual2 = fireDriver.getCurrentUrl();
		Assert.assertNotEquals(actual2, "https://www.ups.com/us/en/Home.page");

	}

}
