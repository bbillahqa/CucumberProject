package login.page;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver d) {
		this.driver = d;
		PageFactory.initElements(driver, this);

	}

	@FindBy(xpath = "//*[@id='email']")
	WebElement userid;

	@FindBy(xpath = "//*[@id='pwd']")
	WebElement password;

	@FindBy(xpath = "//*[@id='submitBtn']")
	WebElement submit;

	public WebElement userID() {
		return userid;
	}

	public WebElement password() {
		return password;
	}

	public WebElement submit() {
		return submit;
	}

}
