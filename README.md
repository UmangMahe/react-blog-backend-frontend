# react-blog-backend-frontend
The Siren demo blog project based on ReactJS, Mongodb and Node.js

## Configuration

### Make sure Mongodb and Node is configured properly

1) Within the backend-server folder is the config.js file, change the PORT number.
2) Within the 'react_blog_project/src' is the config.js, configure it with the same PORT as above

#### Make sure to only change the PORT of your desired choice and not configuring it until required (default: 3005)

3) Within the config.js of the 'backend-server', change the Database Name of your desired choice
(By default, react_blog)
4) Open a Terminal and run the following commands from the main folder

	#### Change <db_name> with the configured DB Name
	
	* mongoimport --db <db_name> -c blogs --file data/blogs.json
	* mongoimport --db <db_name> -c subheadings --file data/subheadings.json
	* mongoimport --db <db_name> -c header_menus --file data/header_menus.json

	

5) Open terminal from 'backend-server'
	* node server.js

6) Open another terminal from 'react_blog_project'
(npm must be configured automatically with node.js)
	* npm install (only for first time)
	* npm start

7) At the browser - http://localhost:3000

#### Make sure above steps are configured properly for a successful run
