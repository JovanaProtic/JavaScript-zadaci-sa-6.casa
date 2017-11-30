							// Prvi zadatak

// Zadat je niz celih brojeva, 
// zadata je vrednost koja se traži 
// i zadata je vrednost kojom treba zameniti traženu vrednost.
// Primer:
//     var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
//     var trazenaVrednost = 4;
//     var vrednostZaZamenu = 25;
// Napisati kod koji će da uzme te tri stvari u obzir 
// i da vrati NOVI niz:
//     var noviNiz = [7, 25, 52, 10, 25, 5, 12, 1, 3, 6] // Dakle, sve 4 su zamenjene sa 25
 
// Takođe, pokušati napisati funkciju za taj problem.
// Krajnja vrednost koja se vraća treba da bude novi niz.
// Funkcija treba da ima 3 parametra: ulazni niz, tražena vrednost, vrednost za zamenu.

// function zamenaNiza(ulazniNiz,trazenaVrednost,vrednostZaZamenu) {
// 	var noviNiz = [];
// 	for(var i = 0; i < ulazniNiz.length; i++){
// 		if(ulazniNiz[i] == trazenaVrednost){
// 			ulazniNiz[i] = vrednostZaZamenu;
// 		} 
// 		noviNiz.push(ulazniNiz[i]);
// 	}
// 	return noviNiz;
// }
// var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
// var niz1 = [15,11,20,50,11,45,56,89,11];
// var niz2 = [65,94,45,75,94,65,15,94];

// console.log(zamenaNiza(niz,4,25));
// console.log(zamenaNiza(niz1,11,0));
// console.log(zamenaNiza(niz2,94,"Zdravo!"));



							// Drugi zadatak

// Kao ulazna vrednost zadat je niz celih brojeva. 
// Proveriti da li u tom nizu postoje bar 2 ista elementa. 
// Ukoliko postoje bar 2 ista elementa vratiti true vrednost, u suprotnom false. 
// Primeri:
//   var niz = [3, 6, 7, 8]; // false
//   var niz = [1, 3, 1, 5]; // true


// function proveraElem(niz){
// 	for(var i = 0; i < niz.length; i++){
// 		for(var x = i + 1; x < niz.length; x++){
// 			if(niz[i] == niz[x]){
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }
// var niz1 = [3, 6, 7, 8]; 
// var niz2 = [1, 3, 1, 5];
// console.log(proveraElem(niz1));
// console.log(proveraElem(niz2));


  							// Treci zadatak

// Posedujemo 2 predmeta. 
// Svaki od njih ima svoju težinu. 
// Takođe znamo koja je maksimalna težina koju možemo da ponesemo sa nama. 
// Proveriti da li možemo da ponesemo oba, samo jedan od njih i to koji ili ni jedan. 
// Takođe se može desiti da ne možemo oba ali da pojedinačno ne prelaze maksimalnu težinu pa možemo da biramo koji ćemo.
//   Dakle, ulazni parametri su:
//        var weight1;
//        var weight2;
//        var maxWeight;
//   Pravila kojih se držimo i poruke koje vraćamo:
//        zbir težina <= maxWeight : "nosimo oba"
//        težina prvog je > maxWeight i takođe težina drugog > maxWeight : "ne možemo ni jedan da ponesemo"
//        težina prvog je > maxWeight ali težina drugog je <= maxWeight : "možemo drugi"
//        težina prvog je <= maxWeight, a težina drugog je > maxWeight : "možemo prvi"
//        težina prvog je <= maxWeight, a isto tako težina drugog <= maxWeight, 
//        međutim njihov zbir je > maxWeight : "možemo da biramo koji ćemo ali ne možemo oba"
 
//   Pravila u kodu ne moraju ići tim redosledom imate potpunu slobodu da ih ispremeštate.
//   Takođe možete slobodno koristiti ugrađene matematičke metode:
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min


// var weight1;
// var weight2;
// var maxWeight;
// function staNosimo(weight1, weight2, maxWeight){
// 	var zbirTezina = weight1 + weight2;
// 	if(zbirTezina <= maxWeight){
// 		console.log('Nosimo oba.');
// 	} else if(weight1 > maxWeight && weight2 > maxWeight){
// 		console.log('Ne mozemo ni jedan da ponesemo.');
// 	} else if(weight1 > maxWeight && weight2 <= maxWeight){
// 		console.log('Mozemo da ponesemo drugi.');
// 	} else if(weight1 <= maxWeight && weight2 > maxWeight){
// 		console.log('Mozemo da ponesemo prvi.');
// 	} else if(weight1 <= maxWeight && weight2 <= maxWeight && zbirTezina > maxWeight){
// 		console.log('Mozemo da biramo koji cemo, ali ne mozemo oba.');
// 	}
// }
// staNosimo(15,25,50);
// staNosimo(15,45,50);
// staNosimo(55,25,50);
// staNosimo(35,100,50);
// staNosimo(55,60,50);