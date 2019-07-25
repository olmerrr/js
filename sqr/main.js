function squareEquation(a,b,c){
	let D, x1,x2;
	D = b**2 - 4*a*c;
	if (D > 0){
		x1 = (-b + Math.sqrt(D)) / (2*a);
		x2 = (-b - Math.sqrt(D)) / (2*a);
		console.log("x1 = " +x1+ "   x2 = " +x2);
		}

	else if (D == 0){
		x1 = (-b / (2*a));
		console.log(" Уровнение имеет один корень x = " + x1);

	}

	else if (D < 0){
		console.log(" Уравнение не имеет корней");

	}
}


squareEquation(3,-14,-5);