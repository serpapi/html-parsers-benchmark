// Created on 2012-12-15
// @author: Sergey Prokhorov <me@seriyps.ru>

var jsdom = require("jsdom");
var fs = require('fs');
const { JSDOM } = jsdom;

    var filename = process.argv[2], n = parseInt(process.argv[3]);

    var html = fs.readFileSync(filename);

    var start = new Date();
    for (var i=0; i < n; i++) {
        var tree = new JSDOM(html);
/*                        null,
                        {features: {
                            FetchExternalResources: false,
                            ProcessExternalResources: false
                        }});*/
    }
    var end = new Date();

    console.log('%d s', (end - start) / 1000);
