const assert = require('chai').assert;

describe('Bork', async function () {
  it('MainPage', async function () {
    await this.browser.url('/');
    await this.browser.execute('document.getElementsByClassName(\'header-modern\')[0].style.position = \'absolute\';');

    await this.browser.assertView('Full MainPage With Cut', 'body',
      {
        ignoreElements: ['.intro-slider__list.owl-carousel', '[data-test="promo-video"]', '.product-instagram'],
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });

    await this.browser.assertView('Full MainPage', 'body',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });

    const elem = await this.browser.$('//section[@class="categories"]/div[1]');
    await elem.scrollIntoView();
    await elem.moveTo();

    await this.browser.assertView('Hover category list', '//section[@class="categories"]/div[1]',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });

    const elem1 = await this.browser.$('//div[@class="products-top"]/article[1]');
    await elem1.scrollIntoView();
    await elem1.moveTo();

    await this.browser.assertView('Hover product card', '//div[@class="products-top"]/article[1]',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });

    await this.browser.assertView('Footer', '.footer ',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });
  });

  it('Cart', async function () {
    await this.browser.url('/');
    await this.browser.execute('document.getElementsByClassName(\'header-modern\')[0].style.position = \'absolute\';');

    const elem1 = await this.browser.$('//div[@class="products-top"]/article[1]/a[contains(@class,\'button\')]');
    const backIcon = await this.browser.$('[data-test="basket-back"]');
    await elem1.scrollIntoView();
    await elem1.click();
    await backIcon.waitForDisplayed({ timeout: 5000 });

    await this.browser.assertView('Full Cart', 'body',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });
  });

  it('Checkout', async function () {
    await this.browser.url('/');
    await this.browser.execute('document.getElementsByClassName(\'header-modern\')[0].style.position = \'absolute\';');

    const elem1 = await this.browser.$('//div[@class="products-top"]/article[1]/a[contains(@class,\'button\')]');
    const backIcon = await this.browser.$('[data-test="basket-back"]');
    const checkoutButton = await this.browser.$('//a[contains(text(),\'Оформить\')]');
    const checkoutRoot = await this.browser.$('.purchase-checkout-page');

    await elem1.scrollIntoView();
    await elem1.click();
    await backIcon.waitForDisplayed({ timeout: 5000 });
    await checkoutButton.click();
    await checkoutRoot.waitForDisplayed({ timeout: 5000 });

    await this.browser.assertView('Full Checkout', 'body',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
      });
  });

  it('Search', async function () {
    await this.browser.url('/');
    await this.browser.execute('document.getElementsByClassName(\'header-modern\')[0].style.position = \'absolute\';');

    const search = await this.browser.$('.header-modern__button-search');
    const searchField = await this.browser.$('[data-test="search-header"] input');
    await search.click();
    await searchField.setValue('Чайники');

    await this.browser.assertView('Full Search', 'body',
      {
        allowViewportOverflow: true,
        captureElementFromTop: true,
        compositeImage: false
      });
  });
});
