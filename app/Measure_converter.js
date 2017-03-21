// Fonction pour convertir une distance métrique à une distance impérial.
exports.unitsMetricToImperial = function(data){
    let resultInCm = '';

    let unitsArray = data.split('/');
    let	units = unitsArray[1];

    let valuesUnits = units.match(/\d+/g).join(',');
    	valuesUnits = valuesUnits.split(',');
    let unitsMetrics = units.match(/\D+/g).join(',');
    	unitsMetrics = unitsMetrics.split(',');

    let unitsMetricsLength = unitsMetrics.length;

    if (unitsMetricsLength == 3 && unitsMetrics[0] == "km" && unitsMetrics[1] == "m" && unitsMetrics[2] == "cm") {
        resultInCm = (valuesUnits[0]*100000)+(valuesUnits[1]*100)+parseInt(valuesUnits[2]);
    }  else if (unitsMetricsLength == 2) {
        switch(unitsMetrics[0]) {
            case 'km':
                switch(unitsMetrics[1]) {
                    case 'm':
                        resultInCm = (valuesUnits[0]*100000)+(valuesUnits[1]*100);
                        break;
                    case 'cm':
                        resultInCm = (valuesUnits[0]*100000)+parseInt(valuesUnits[1]);
                        break;
                    default :
                        resultInCm = 'Erreur sur la deuxième unité de mesure !!!';
                        break;
                }
                break;
            case 'm':
                switch(unitsMetrics[1]) {
                    case 'cm':
                        resultInCm = (valuesUnits[0]*100)+parseInt(valuesUnits[1]);
                        break;
                    default :
                        resultInCm = 'Erreur sur la deuxième unité de mesure !!!';
                        break;
                }
            default :
                resultInCm = 'Erreur dés la première unité de mesure !!!';
                break;

        }
    } else if (unitsMetricsLength == 1) {
        switch(unitsMetrics[0]) {
            case 'km':
                resultInCm = (valuesUnits[0]*100000);
                break;
            case 'm':
                resultInCm = (valuesUnits[0]*100);
                break;
            case 'cm':
                resultInCm = parseInt(valuesUnits[0]);
                break;
            default :
                resultInCm = 'Erreur de mesure !!!';
                break;
        }
    } else {
        resultInCm = 'Erreur de mesure !!!';
    }

    if (typeof(resultInCm) != 'string') {

        // Maintenant que nous avons le résultat en cm on va le convertir en inch.
        let inch = parseInt(resultInCm * 0.393701);

        // Convertir le resultat sous la forme de ??mi??yd??ft??in si besoin.
        let mi = parseInt(inch / 63360);
        inch = inch - (mi * 63360);
        let yd = parseInt(inch / 36);
        inch = inch - (yd * 36);
        let ft = parseInt(inch / 12);
        inch = inch - (ft * 12);

        let imperialDistance = '';
        if (mi != 0) {
            imperialDistance += mi + 'mi';
        }
        if (yd != 0) {
            imperialDistance += yd + 'yd';
        }
        if (ft != 0) {
            imperialDistance += ft + 'ft';
        }
        if (inch != 0) {
            imperialDistance += inch + 'in';
        }

        return "La conversion impérial de " + units + " donne " + imperialDistance + " en unités métrique";
    } else {
        return resultInCm + " Veuillez retaper votre distance";
    }
};


// Fonction pour convertir une distance impérial à une distance métrique.
exports.unitsImperialToMetric = function(data){
    let resultInInch = '';

    let unitsArray = data.split('/');
    let	units = unitsArray[1];

    let valuesUnits = units.match(/\d+/g).join(',');
    	valuesUnits = valuesUnits.split(',');
	let unitsImperial = units.match(/\D+/g).join(',');
		unitsImperial = unitsImperial.split(',');

    let unitsImperialLength = unitsImperial.length;

    if (unitsImperialLength == 4 && unitsImperial[0] == "mi" && unitsImperial[1] == "yd" && unitsImperial[2] == "ft" && unitsImperial[3] == "in") {
        resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*36)+(valuesUnits[2]*12)+parseInt(valuesUnits[3]);
    } else if (unitsImperialLength == 3) {
        switch(unitsImperial[0]) {
            case 'mi':
                switch(unitsImperial[1]) {
                    case 'yd':
                        switch (unitsImperial[2]) {
                            case 'ft':
                                resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*36)+(valuesUnits[2]*12);
                                break;
                            case 'in':
                                resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*36)+parseInt(valuesUnits[2]);
                                break;
                            default :
                                resultInInch = 'Erreur sur la troisième unité de mesure !!!';
                                break;
                        }
                        break;
                    case 'ft':
                        switch (unitsImperial[2]) {
                            case 'in':
                                resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*12)+parseInt(valuesUnits[2]);
                                break;
                            default :
                                resultInInch = 'Erreur sur la troisième unité de mesure !!!';
                                break;
                        }
                    default :
                        resultInInch = 'Erreur dés la deuxième unité de mesure !!!';
                        break;
                }
                break;
            case 'yd' :
                if (unitsImperial[1] == 'ft' && unitsImperial[2] == 'in'){
                    resultInInch = (valuesUnits[0]*36)+(valuesUnits[1]*12)+parseInt(valuesUnits[2]);
                    break;
                } else {
                    resultInInch = 'Erreur de mesure !!!';
                    break;
                }
            default :
                resultInInch = 'Erreur dés la première unité de mesure !!!';
                break;
        }

    } else if (unitsImperialLength == 2) {
        switch(unitsImperial[0]) {
            case 'mi':
                switch(unitsImperial[1]) {
                    case 'yd':
                        resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*36);
                        break;
                    case 'ft':
                        resultInInch = (valuesUnits[0]*63360)+(valuesUnits[1]*12);
                        break;
                    case 'in':
                        resultInInch = (valuesUnits[0]*63360)+parseInt(valuesUnits[1]);
                        break;
                    default :
                        resultInInch = 'Erreur sur la deuxième unité de mesure !!!';
                        break;
                }
                break;
            case 'yd' :
                switch(unitsImperial[1]) {
                    case 'ft':
                        resultInInch = (valuesUnits[0]*36)+(valuesUnits[1]*12);
                        break;
                    case 'in':
                        resultInInch = (valuesUnits[0]*36)+parseInt(valuesUnits[1]);
                        break;
                    default :
                        resultInInch = 'Erreur sur la deuxième unité de mesure !!!';
                        break;
                }
                break;
            case 'ft' :
                switch(unitsImperial[1]) {
                    case 'in':
                        resultInInch = (valuesUnits[0]*12)+parseInt(valuesUnits[1]);
                        break;
                    default :
                        resultInInch = 'Erreur sur la deuxième unité de mesure !!!';
                        break;
                }
            default :
                resultInInch = 'Erreur dés la première unité de mesure !!!';
                break;
        }
	} else if (unitsImperialLength == 1) {
            switch(unitsImperial[0]) {
                case 'mi':
                    resultInInch = (valuesUnits[0]*63360);
                    break;
                case 'yd':
                    resultInInch = (valuesUnits[0]*36);
                    break;
                case 'ft':
                    resultInInch = (valuesUnits[0]*12);
                    break;
                case 'in':
                    resultInInch = parseInt(valuesUnits[0]);
                    break;
                default :
                    resultInInch = 'Erreur de mesure !!!';
                    break;
            }
	} else {
		resultInInch = 'Erreur de mesure !!!';
	}

    if (typeof(resultInInch) != 'string') {
        // Maintenant que nous avons le résultat en Inch on va leconvertir en cm.
        let resultInCm = parseInt(resultInInch*2.54);
        console.log(resultInCm);
        // Convertir le resultat sous la forme de ??km??m??cm si besoin.
        let km = parseInt(resultInCm/100000);
            resultInCm = resultInCm -(km*100000);
        let m = parseInt(resultInCm/100);
            resultInCm = resultInCm -(m*100);
        let metricDistance = '';

        if (km != 0) {
            metricDistance+= km+'km';
        }
        if (m != 0) {
            metricDistance += m+'m';
        }
        if (resultInCm != 0) {
            metricDistance += resultInCm+'cm';
        }
        return "La conversion métrique de " + units + " donne " + metricDistance + " en unités impérial";

    } else {
        return resultInInch + " Veuillez retaper votre distance";
    }
};