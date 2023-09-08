const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get logoHeader () {
        return $("img[alt='Rodalink Indonesia']")
    }

    get pilihKategoriHeader () {
        return $('#vesitem-97621694131201198923041')
    }
    get pilihKategoriSepeda () {
        return  $('//*[@id="vesitem-97521694131201869882588"]/a')
    }
    get pilihKategoriSepedaGunung () {
        return  $('//*[@id="16941312011515555156"]/a')
    }
    get searchbarHeader () {
        return $('#search')
    }

    get searchBtn () {
        return $("button[title='Cari']")
    }
    
    get lokasiOutletIcon () {
        return $('.stock-store')
    }

    get wishlistIcon () {
        return $('.link.wishlist')
    }

    get akunSayaIcon () {
        return  $("//a[@title='Akun Saya']")
    }

    get troliIcon() {
        return  $("//a[@title='Troli']")
    }

    //DropDown Dialog Login

    get daftarSekarangBtn () {
        return $(".sign-up")
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async verifyHeaderComponentisDisplayed () {
        expect(await this.logoHeader.isDisplayed()).toBe(true);
        expect(await this.pilihKategoriHeader.isDisplayed()).toBe(true);
        expect(await this.searchbarHeader.isDisplayed()).toBe(true);
        expect(await this.lokasiOutletIcon.isDisplayed()).toBe(true);
        expect(await this.wishlistIcon.isDisplayed()).toBe(true);
        expect(await this.akunSayaIcon.isDisplayed()).toBe(true);
        expect(await this.troliIcon.isDisplayed()).toBe(true);
    }

    async openRegisterPage(){
        await this.akunSayaIcon.click();
        await this.daftarSekarangBtn.click();
        expect (await browser.getUrl()).toBe('https://www.rodalink.com/id/customer/account/create/');

    }

    async bukaKategoriSepedaGunung () {
        await this.pilihKategoriHeader.waitForDisplayed({timeout:10000})
        await this.pilihKategoriHeader.click();
        await browser.moveTo(this.pilihKategoriSepeda);
        await this.pilihKategoriSepedaGunung.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
