staticweb.js
============

Node.js static web server, using Express

Licence
=======

This project is released under the MIT license.  See the LICENSE file in the project root directory for details.

Purpose
=======

A little bit of practise using Node.js & Express.  It turns out that it's extremely easy to use the two of them to serve
static files.  Funny that.

Usage
=====

* Make sure you have Node & npm installed
* Run `npm install` in the project root directory.  This will download any dependancies
* Modify `config.json` to contain:
	* the port to listen on
	* the subdirectory to serve files from
* Run the server: `node staticweb.js`
* Go to http://server:port/ in your browser
* That's it!  You're done.