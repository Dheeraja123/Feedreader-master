Project Overview:

This project demonstrates and incorporates jasmine testing during the Udacity Feed Reader (Unit Testing) Project.
Running the code

To run the code check out the repository or clone the repository from here Feed Reader
Open the folder that you downloaded after clone or extraction.
Click on the index.html file to start the application in a web browser.( eg Google Chrome)
The unit test will be at the bottom of the page under the jasmine test.
Unit Tests

Testsuite: RSS Feeds

Test: are defined

Check if allFeeds array defined.
Check if allfeeds array to have a length greater than 0.
Test: has an url defined and is not empty

Check if allFeeds array defined.
Check if allfeeds elements has url defined.
Check if allfeeds elements url is not empty and valid.
Test: has a name defined and is not empty

Check if allFeeds array defined.
Check if allfeeds elements has name defined.
Check if allfeeds elements name is not empty.
Testsuite: The Menu

Test: is not visible

Check if the body element has the menu-hidden class.
Test: hides and shows it's visible state

Check if the body element has the menu-hidden class on startup.
Check if the body element does not have the class menu-hidden.
Check if the body element has the class menu-hidden.
Test: side links exists.

Check if the feed class exists on element ul.
Check if the feed class exists on element ul.
Check each li contains a element.
Test suite: Initial Entries

Test: calls the loadFeed function

Check if the feed class exists.
Check if the feed has a length greater than 0.
Check if there is a entry link class.
Check each entry-link has a article.entry element.
Test suite: New Feed Selection

Test: content has changed

Check that feed object are not the same.
Test suite: Javascript Links check (TODO)

TODO: Write this test.
URLs used during research and implementation of project.

Regular Exp Match elements of a url
RegExLib.com
JQuery event.stopPropagation
Using Jasmine 2.0's New done() Function to Test Asynchronous Processes
Jasmine Github
Testing Javascript Using the Jasmine Framework
Navigator language property
Picture Resizer
Add a screenshot to your github readme
Languages & Frameworks used
