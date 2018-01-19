module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },
    'Evens and Odds': browser => {
        browser
            .setValue('input[name="evenOddInput"]', "1,2,3,4,5,6,7,8,9,10")
            .click('button[name="evenOddButton"]')
            .expect.element('span[name="evenResults"]').text.to.contain("2,4,6,8,10")
        browser
            .expect.element('span[name="oddResults"]').text.to.contain("1,3,5,7,9")
    },

    'Filter Object': browser => {
        browser
            .setValue('input[name="objectFilterInput"]', "name")
            .click('button[name="objectFilterButton"]')
            .expect.element('span[name="objectFilterResults"]').text.to.contain("Jimmy", "Jeremy", "Carly")
    },

    'Filter String': browser => {
        browser
            .setValue('input[id="nameFilterInput"]', "i")
            .click('button[id="nameFilterButton"]')
            .expect.element('span[name="nameFilterResults"]').text.to.contain("Jessica", "Jennifer")
    },

    'Palindrome': browser => {
        browser
            .setValue('input[name="palindromeInput"]', "abuttuba")
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.contain("true")
    },

    'Sum': browser => {
        browser
        .setValue('input[name="sumInput1"]', "2")
        .setValue('input[name="sumInput2"]', "10")
        .click('button[name="sumButton"]')
        .expect.element('span[name="sumResults"]').text.to.contain("12")
    }


}
