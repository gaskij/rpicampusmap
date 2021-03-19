describe('<Map />', () => {
  test('dev mode?', () => {
    expect(process.env.NODE_ENV).toMatch('development');
  });
});
