	const rectangle = require('./rectangle');
var rect = require('./rectangle');
    function solveRect(l,b) {
        rect(l,b, (err, rectangle) => {
            if (err) {
                console.log("Error: ", err.message);
            }
            else {
                console.log("The area of the rectangle of dimensions l = "
                    + l + " and b = " + b + " is " + rectangle.area()
                );
                console.log("The perimeter of the retangle of dimensions l = "
                    + l + " and b = " + b + " is " + rectangle.perimeter()
                );
            }
        });
        console.log("This statment after the call to rect()");
    };
    	
        
    	
    	solveRect(2,4);
    	solveRect(3,5);
    	solveRect(0,5);
    	solveRect(-3,5);
    