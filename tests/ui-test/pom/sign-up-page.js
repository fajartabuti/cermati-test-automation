import { Selector } from 'testcafe';

class Page {
    constructor () {
        //text field
        this.emailElement = Selector('#email')
        this.mobileNumberElement = Selector('#mobilePhone')
        this.passwordElement = Selector('#password')
        this.confirmPasswordElement = Selector('#confirmPassword')
        this.firstNameElement = Selector('#firstName')
        this.lastNameElement = Selector('#lastName')

        //search field
        this.cityAndProvinceElement = Selector('#cityAndProvince')
        this.autoCompleteCityAndProvinceElement = Selector('div').withAttribute('class',/autocomplete__list-item/)
        
        //button
        this.daftarButton = Selector('button').withAttribute('data-button-name','register-new')
        
        //checkbox
        this.termsAndConditionElement = Selector('#terms-and-condition')
    }
}

export default new Page();
