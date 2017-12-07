import createAuthRedirectURL from './createAuthRedirectURL';

  describe('authentication/createAuthRedirectURL', () => {
    it('should return properly formatted URL', () => {
      const result = createAuthRedirectURL(
        `https://www.mysite.com/oauth/login`,
        `code`,
        `ABC123`,
        `https://www.shenanigans.com`
      );
      expect(result).toContain('https://www.mysite.com/oauth/login')
      expect(result).toContain('scope=*')
      expect(result).toContain('response_type=code')
      expect(result).toContain('client_id=ABC123')
      expect(result).toContain('redirect_uri=https%3A%2F%2Fwww.shenanigans.com')
    });

    it('should throw when given a responsetype=token and no UUID', () => {
      expect(() => createAuthRedirectURL(
        `https://www.mysite.com/oauth/login`,
        `token`,
        `ABC123`,
        `https://www.shenanigans.com`
      )).toThrow();
    });
  });