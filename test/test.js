var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var test = require('./../app/Measure_converter');

// Tests unitaires Metric to Imperial
describe('Convert metric to imperial', function() {
    it('TEST 1 : unitsMetricToImperial(1km15m23cm) should return 1110yd9in in units imperial if function works fine', function() {
        expect(test.unitsMetricToImperial("/1km15m23cm")).to.equal("1km15m23cm donne 1110yd9in en unités impériales");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 2 : unitsMetricToImperial(15km12cm) should return 9mi564yd1ft in units imperial if function works fine', function() {
        expect(test.unitsMetricToImperial("/15km12cm")).to.equal("15km12cm donne 9mi564yd1ft en unités impériales");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 3 : unitsMetricToImperial(15m) should return 16yd1ft2in in units imperial if function works fine', function() {
        expect(test.unitsMetricToImperial("/15m")).to.equal("15m donne 16yd1ft2in en unités impériales");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 4 : unitsMetricToImperial(15kv12m2cm) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/15kv12m2cm")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 5 : unitsMetricToImperial(12m2ct) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/12m2ct")).to.equal("Erreur sur la deuxième unité de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 6 : unitsMetricToImperial(km4m2cm) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/km4m2cm")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 7 : unitsMetricToImperial(1m12cm,,) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/1m12cm,,")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 8 : unitsMetricToImperial(12km3m3cm4cm) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/12km3m3cm4cm")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert metric to imperial', function() {
    it('TEST 9 : unitsMetricToImperial(1m15ct) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsMetricToImperial("/1m15ct")).to.equal("Erreur sur la deuxième unité de mesure !!! Veuillez retaper votre distance");
    });
});

// Tests unitaires Imperial to Metric
describe('Convert imperial to metric', function() {
    it('TEST 1 : unitsImperialToMetric(15mi12yd10ft1in) should return 24km154m20cm in units metrics if function works fine', function() {
        expect(test.unitsImperialToMetric("/15mi12yd10ft1in")).to.equal("15mi12yd10ft1in donne 24km154m20cm en unités métriques");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 2 : unitsImperialToMetric(12yd10ft1in) should return 14m4cm in units metrics if function works fine', function() {
        expect(test.unitsImperialToMetric("/12yd10ft1in")).to.equal("12yd10ft1in donne 14m4cm en unités métriques");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 3 : unitsImperialToMetric(10ft1in) should return 3m7cm in units metrics if function works fine', function() {
        expect(test.unitsImperialToMetric("/10ft1in")).to.equal("10ft1in donne 3m7cm en unités métriques");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 4 : unitsImperialToMetric(1in) should return 2cm in units metrics if function works fine', function() {
        expect(test.unitsImperialToMetric("/1in")).to.equal("1in donne 2cm en unités métriques");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 5 : unitsImperialToMetric(15ts12mi2in) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/15ts12mi2in")).to.equal("Erreur dés la première unité de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 6 : unitsImperialToMetric(12mi2pn) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/12mi2pn")).to.equal("Erreur sur la deuxième unité de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 7 : unitsImperialToMetric(mi4yd2in) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/mi4yd2in")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 8 : unitsImperialToMetric(15mi12mi2in14) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/15mi12mi2in14")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 9 : unitsImperialToMetric(14mi15yd12ft2in15in) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/14mi15yd12ft2in15in")).to.equal("Erreur de mesure !!! Veuillez retaper votre distance");
    });
});

describe('Convert imperial to metric', function() {
    it('TEST 10 : unitsImperialToMetric(12ft2int) should return a ERROR MESSAGE if function works fine', function() {
        expect(test.unitsImperialToMetric("/12ft2int")).to.equal("Erreur sur la deuxième unité de mesure !!! Veuillez retaper votre distance");
    });
});