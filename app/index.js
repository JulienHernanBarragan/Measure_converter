// app/index.js

var http = require('http') ;
var url = require('url') ;
var Measure_converter = require('./Measure_converter') ;

var server = http.createServer(function (requete, resultat) {
    var page = url.parse(requete.url).pathname ;
    var data;
    var statutCode = 200;

	// See if the distances are Metrics or Imperial
    let km = page.indexOf('km');
    let m = page.indexOf('m');
    let cm = page.indexOf('cm');
    let inch = page.indexOf('in');
    let foot = page.indexOf('ft');
    let yard = page.indexOf('yd');
    let miles = page.indexOf('mi');

    if ((km >= 0 || m >= 0 || cm >= 0) && miles < 0) {
        data = Measure_converter.unitsMetricToImperial(page);
    } else if (miles >= 0 || yard >= 0 || foot >= 0 || inch >= 0) {
        data = Measure_converter.unitsImperialToMetric(page);
    } else {
        data = 'Erreur de mesure !!! Veuillez retaper votre distance';
    }

    if (data.indexOf('Erreur') >= 0) {
        statutCode = 404;
    }

    resultat.writeHead(statutCode,{"Content-Type": "text/plain; charset=UTF-8"});
    resultat.end(data);
});

server.listen(8888) ;