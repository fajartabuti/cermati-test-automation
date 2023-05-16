import { Selector } from 'testcafe';
import Page from '../pom/sign-up-page';

require('dotenv').config();

fixture `Cermati Sign Up Test Automation`
    //go to base url
    .page`${process.env.CERMATI_URL}`

test('Should Passed Sign Up ', async t => {
    
    await t
        //expected masuk ke gabung page
        .expect(Selector('h1').withText('Daftar Akun').exists).ok('expected masuk ke gabung page')
        //input email
        .typeText(Page.emailElement, process.env.EMAIL)
        //input nomor handphone
        .typeText(Page.mobileNumberElement, process.env.NO_HANDPHONE)
        //input kata sandi
        .typeText(Page.passwordElement, process.env.PASSWORD)
        //input ulangi kata sandi
        .typeText(Page.confirmPasswordElement, process.env.PASSWORD)
        //input nama depan
        .typeText(Page.firstNameElement, process.env.NAMA_DEPAN)
        //input nama belakang
        .typeText(Page.lastNameElement, process.env.NAMA_BELAKANG)
        //cari kota kabupaten
        .typeText(Page.cityAndProvinceElement, process.env.KOTA_KABUPATEN)
        //tunggu sampai element auto complete kabupaten kota tampil
        .expect(Page.autoCompleteCityAndProvinceElement.exists).ok('tunggu sampai element auto complete kabupaten kota tampil')
        //pilih kota kabupaten
        .click(Page.autoCompleteCityAndProvinceElement.nth(0))
        //ceklis terms and condition
        let isCheckedTermsAndCondition = await Page.termsAndConditionElement.checked
        
        if( isCheckedTermsAndCondition != true ){
            console.log('udah di ceklis')
        }
        
    await t
        //klik button daftar
        .click(Page.daftarButton)
        .wait(5000)
})