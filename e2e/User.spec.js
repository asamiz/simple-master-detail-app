describe('User Screen Specs', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should navigates to user screen when pressing on any card', async () => {
    await element(by.id('user-1-card')).tap();
  });

  it('should render user name and image', async () => {
    await expect(element(by.id('user-name'))).toBeVisible();
    await expect(element(by.id('user-image'))).toBeVisible();
    await device.reloadReactNative();
  });

  it('should render first character of the user when she / he does not have an image', async () => {
    await element(by.id('users-list')).scroll(100, 'down');
    await element(by.id('user-7-card')).tap();
    await expect(element(by.id('user-image-placeholder'))).toBeVisible();
    await device.reloadReactNative();
  });

  it('should render user contact information', async () => {
    await element(by.id('user-5-card')).tap();
    await expect(element(by.id('contact-info-section'))).toBeVisible();
  });

  it('should render user deals information', async () => {
    await expect(element(by.id('user-deals'))).toBeVisible();
  });

  it('should render user activities information', async () => {
    await expect(element(by.id('user-deals'))).toBeVisible();
    await device.launchApp();
  });
});
