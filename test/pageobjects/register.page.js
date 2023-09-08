const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get registerPageTitle () {
        return $('.page-title');
    }
    get fieldNamaDepan () {
        return $('#firstname');
    }
    get fieldNamaBelakang () {
        return $('#lastname');
    }
    get fieldNoTlp () {
        return $('#phone_number');
    }
    get fieldDoB () {
        return $('#dob');
    }
    get datePickerBtn () {
        return $("//button[@class='ui-datepicker-trigger v-middle']");
    }
    get fieldGender () {
        return $('#gender');
    }
    get fieldEmail () {
        return $('#email_address');
    }
    get fieldPassword () {
        return $('#password');
    }
    get fieldKonfirmasiPassword () {
        return $('#password-confirmation');
    }
    get daftarBtn () {
        return $("button[title='Daftar']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkAllRegisterFieldIsDisplayed () {
        expect(await this.registerPageTitle.isDisplayed()).toBe(true);
        expect(await this.fieldNamaDepan.isDisplayed()).toBe(true);
        expect(await this.fieldNamaBelakang.isDisplayed()).toBe(true);
        expect(await this.fieldNoTlp.isDisplayed()).toBe(true);
        expect(await this.fieldDoB.isDisplayed()).toBe(true);
        expect(await this.datePickerBtn.isDisplayed()).toBe(true);
        expect(await this.fieldEmail.isDisplayed()).toBe(true);
        expect(await this.fieldPassword.isDisplayed()).toBe(true);
        expect(await this.fieldKonfirmasiPassword.isDisplayed()).toBe(true);
        expect(await this.daftarBtn.isDisplayed()).toBe(true);

    }
}

module.exports = new RegisterPage();
