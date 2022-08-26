jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useFocusEffect: () => jest.fn(),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        user: {
          id: 1,
          name: 'Test User1',
          picture_id: { pictures: { 512: undefined } },
          first_char: 't',
          phone: [
            {
              value: '',
              primary: true,
            },
          ],
          email: [
            {
              value: '',
              primary: true,
            },
          ],
          org_id: {
            name: 'Test Organization',
            people_count: 0,
            owner_id: 0,
            address: null,
            active_flag: true,
            cc_email: 'dummy@dummy.com',
            value: 0,
          },
        },
      },
    }),
  };
});
