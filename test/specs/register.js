const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const faker = require('faker');
const assert = require('assert');
const RegisterPage = require('../pageobjects/register.page')

describe('Rodalink - Register', () => {
    it.only('Success Register with valid data', async () => {
        await HomePage.open()
        await HomePage.openRegisterPage()
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        const emailuser = firstName.toLowerCase() + "@yopmail.com";
        console.log(emailuser)

        await RegisterPage.checkAllRegisterFieldIsDisplayed()
        await RegisterPage.fieldNamaDepan.setValue(firstName);
        await RegisterPage.fieldNamaBelakang.setValue(lastName);
        await RegisterPage.fieldNoTlp.setValue("81234567890");
        await RegisterPage.fieldDoB.setValue("05/09/2000");
        await RegisterPage.fieldGender.click();
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter']);
        await RegisterPage.fieldEmail.setValue(emailuser);
        await RegisterPage.fieldPassword.setValue("Akuntes1");
        await RegisterPage.fieldKonfirmasiPassword.setValue("Akuntes1");
        await RegisterPage.daftarBtn.scrollIntoView();
        await RegisterPage.daftarBtn.click();

        await browser.pause(10000)
    })
})

