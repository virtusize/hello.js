// Line
(function(hello) {
	// For APIs, once a version is no longer usable, any calls made to it will be defaulted to the next oldest usable version.
	// So we explicitly state it.
	var version = 'v2.1';

	hello.init({

		line: {

			name: 'Line',

			// SEE https://developers.line.biz/en/docs/line-login/web/integrate-line-login/
			oauth: {
				version: 2,
				auth: 'https://access.line.me/oauth2/' + version + '/authorize?response_type=code',
				response_type: 'code',
				grant: 'https://api.line.me/oauth2/' + version + '/token'
			},

			// Authorization scopes
			scope: {
				basic: 'profile',
				email: 'openid email'
			},

			scope_delim: ' ',

			base: 'https://api.line.me/'
		}
	});

})(hello);
