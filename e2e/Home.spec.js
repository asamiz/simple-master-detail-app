describe('Home Screen Specs', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should contain pipedrive logo', async () => {
    await expect(element(by.id('pipedrive-logo'))).toBeVisible();
  });

  it('should contain list of users', async () => {
    await expect(element(by.id('users-list'))).toBeVisible();
  });

  it('should contain user card with name', async () => {
    await expect(
      element(
        by
          .id('users-list')
          .withDescendant(by.id('user-card'))
          .withDescendant(by.id('user-1-name')),
      ),
    ).toBeVisible();
  });

  it('should contain user card with image', async () => {
    await expect(
      element(
        by
          .id('users-list')
          .withDescendant(by.id('user-card'))
          .withDescendant(by.id('user-1-image')),
      ),
    ).toBeVisible();
  });
});
