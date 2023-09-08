const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const assert = require('assert');

describe('Rodalink Homescreen', () => {
    it('Verify Rodalink Header', async () => {
        await HomePage.open()
        await HomePage.verifyHeaderComponentisDisplayed()
    })
    it('Verify Search produk with data', async () => {
        const pageNotWorking = $('/html/body/div[1]/div[1]/div[2]/h1/span')
        const keyword = "MTB"
        const hasilPencarian = $('.page-title')
        const expectedText = "HASIL PENCARIAN UNTUK: '" + keyword + "'"

        await HomePage.open()
        await HomePage.searchbarHeader.setValue(keyword);
        await HomePage.searchBtn.click();
        await browser.pause(5000)
        const actualText = await hasilPencarian.getText()
        console.log(actualText)
        expect(await hasilPencarian.isDisplayed()).toBe(true);
        assert.equal(expectedText, actualText);
    })
    it('Verify Search produk with no data', async () => {
        const keyword = "AXAXAXAX"
        const hasilPencarian = $('.page-title')
        const message = $('.message.notice')
        const expectedText = "HASIL PENCARIAN UNTUK: '" + keyword + "'"

        await HomePage.open()
        await HomePage.searchbarHeader.setValue(keyword);
        await HomePage.searchBtn.click();
        await browser.pause(5000)
        const actualText = await hasilPencarian.getText()

        console.log(await message.getText())
        expect(await hasilPencarian.isDisplayed()).toBe(true);
        assert.equal(expectedText, actualText);
        expect(await message.isDisplayed()).toBe(true);
        assert.equal(await message.getText(), "Tidak ada produk yang sesuai dengan pencarian Anda.");
    })
    it('Verify Search produk with special character', async () => {
        const keyword = "~!@#$%^"
        const hasilPencarian = $('.page-title')
        const message = $('.message.notice')
        const expectedText = "HASIL PENCARIAN UNTUK: '" + keyword + "'"

        await HomePage.open()
        await HomePage.searchbarHeader.setValue(keyword);
        await HomePage.searchBtn.click();
        await browser.pause(5000)
        const actualText = await hasilPencarian.getText()

        console.log(await message.getText())
        expect(await hasilPencarian.isDisplayed()).toBe(true);
        assert.equal(expectedText, actualText);
        expect(await message.isDisplayed()).toBe(true);
        assert.equal(await message.getText(), "Tidak ada produk yang sesuai dengan pencarian Anda.");
    })
})

