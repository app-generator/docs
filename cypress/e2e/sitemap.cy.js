let localUrls = [];
let liveUrls = [];
before(() => {
	cy.request({
		url: "https://docs.appseed.us/sitemap.xml",
		headers: {
			"Content-Type": "text/xml; charset=utf-8",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
		},
	})
		.as("sitemap")
		.then((response) => {
			liveUrls = Cypress.$(response.body)
				.find("loc")
				.toArray()
				.map((el) => el.innerText);
		});
	cy.request({
		url: "http://localhost/appSeed2/sitemap.xml",
		headers: {
			"Content-Type": "text/xml; charset=utf-8",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
		},
	})
		.as("sitemap")
		.then((response) => {
			localUrls = Cypress.$(response.body)
				.find("loc")
				.toArray()
				.map((el) => el.innerText);
		});
});

it("Each Live Url should be included in Local sitemap", () => {
	liveUrls.forEach((url) => {
		expect(localUrls).to.include(url);
	});
});

it("should succesfully return status 200 from each url in the sitemap", () => {
	liveUrls.forEach((url) => {
		let url1 = url.split("https://docs.appseed.us");
		cy.request({
			url: "http://localhost/appSeed2" + url1[1],
			headers: {
				"Content-Type": "text/html",
				accept: "*/*",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
			},
		}).then((resp) => {
			expect(resp.status).to.eq(200);
		});
	});
});

it("should succesfully load each url in the sitemap", () => {
	liveUrls.forEach((url) => {
		let url1 = url.split("https://docs.appseed.us");

		cy.visit("http://localhost/appSeed2" + url1[1]);
	});
});
