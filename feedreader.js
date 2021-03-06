/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
            /* This is our first test suite - a test suite just contains
             * a related set of tests. This suite is all about the RSS
             * feeds definitions, the allFeeds variable in our application.
             */
            describe('RSS Feeds', function() {
                /* This is our first test - it tests to make sure that the
                 * allFeeds variable has been defined and that it is not
                 * empty. Experiment with this before you get started on
                 * the rest of this project. What happens when you change
                 * allFeeds in app.js to be an empty array and refresh the
                 * page?
                 */
                it('are defined', function() {
                    expect(allFeeds).toBeDefined();
                    expect(allFeeds.length).not.toBe(0);
                });
                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a URL defined
                 * and that the URL is not empty.
                 */

                it('has a URL defined', function() {
                    //define (feed)
                    allFeeds.forEach(function(feed) {
                        //runs the test that the URL is defined
                        expect(feed.url).toBeDefined();
                    });
                });
                it('URL is not empty', function() {
                    //define feed
                    allFeeds.forEach(function(feed) {
                        //makes sure the URL is not empty
                        expect(feed.url.length).not.toBe(0);
                    });
                });
                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
                it('has a name defined', function() {
                    allFeeds.forEach(function(feed) {
                        expect(feed.name).toBeDefined();
                    });


                });
                it('name not empty', function() {
                    allFeeds.forEach(function(feed) {
                        expect(feed.name.length).not.toBe(0);
                    });
                });
                /* TODO: Write a test that loops through each feed
                 * in the allFeeds object and ensures it has a name defined
                 * and that the name is not empty.
                 */
            });
            /* TODO: Write a new test suite named "The menu" */
            describe('The Menu', function() {
                /* TODO: Write a test that ensures the menu element is
                 * hidden by default. You'll have to analyze the HTML and
                 * the CSS to determine how we're performing the
                 * hiding/showing of the menu element.
                 */
                it('is hidden by default', function() {
                    //define body
                    var body = $('body');
                    //runs the test to show the menu is hidden by default
                    expect(body.hasClass('menu-hidden')).toBe(true);
                });
                /* TODO: Write a test that ensures the menu changes
                 * visibility when the menu icon is clicked. This test
                 * should have two expectations: does the menu display when
                 * clicked and does it hide when clicked again.
                 */
                // Expect the menu icon toggles hide/show when clicked
                it('changes visibility when the menu icon is clicked', function() {
                    var icon = $('.menu-icon-link');
                    var body = $('body');
                    icon.click();
                    //test that the menu display after icon is clicked
                    expect(body.hasClass('menu-hidden')).toBe(false);
                    icon.click();
                    //test that the menu is hidden when icon is clicked again
                    expect(body.hasClass('menu-hidden')).toBe(true);
                });
            });
            /* TODO: Write a new test suite named "Initial Entries" */
            describe('Initial Entries', function() {
                /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
        // Because loadFeed() is asynchronous this test requires
        // the use of Jasmine's beforeEach and asynchronous done() function.*/
        beforeEach(function(done) {
            loadFeed(0,done);
        });
      // Make sure each (.feed .entry) element has valid entry in container
        it('Should have a least one .entry in the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
	
	 /* TODO: Write a new test suite named "New Feed Selection" */
                // Testing suite of New Feed Selection
                describe('New Feed Selection', function() {
                    /* TODO: Write a test that ensures when a new feed is loaded
                     * by the loadFeed function that the content actually changes.
                     * Remember, loadFeed() is asynchronous.
                     */
                    // Initial loaded feed setup
                    beforeEach(function(done) {
                        loadFeed(1, function() {
                            feedContent = $('.feed').html();
                            done();
                        });
                    });

                    // Make sure when new feed is loaded using loadFeed function,
                    // the content changes
                    it('Changes contents when a new feed is loaded', function(done) {
                        loadFeed(0, function() {
                            expect($('.feed').html()).not.toEqual(feedContent);
                            done();
                        });
                    });
                });
                /* 
                 */
            }());
