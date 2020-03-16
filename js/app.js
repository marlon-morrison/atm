var output = document.getElementById("output");
var thePin = "";
var nums = document.getElementsByClassName("number");
let loginD = document.getElementById("login");
let mainScreenD = document.getElementById("mainScreen");
let withdrawalD = document.getElementById("withdrawal");
let depositD = document.getElementById("deposit");
let invalid = document.getElementById("invalid");
let take = document.getElementById("take");
let putIn = document.getElementById("putIn");
let name = document.getElementById("name");
let checkingsB = document.getElementById("checkingsB");
let savingsB = document.getElementById("savingsB");
let checkingsC = document.getElementById("checkingsC");
let savingsC = document.getElementById("savingsC");
let checkingD = document.getElementById("checkingD");
let savingD= document.getElementById("savingD");
let checkingsD = document.querySelectorAll("#checkingsD");
let savingsD = document.querySelectorAll("#savingsD")
let thanks = document.querySelectorAll("#thanks");
let amount;
let p;

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click",function () {
        if (thePin.length > 3) {
            thePin.length = 0;
            return thePin
        }
        thePin += this.getAttribute("data-value");
        output.value = thePin; // Display number
    });
};

function confirmP() {
    let password = document.getElementById("output").value;
    for (let i = 0; i < people.length; i++) {
        if (password == people[i].pin) {
            name.innerText = `${people[i].fname} ${people[i].lname}`;
            savingsB.innerText = `savings:$${people[i].savings}`
            checkingsB.innerText = `checking:$${people[i].checkings}`
            p = i;
            mainS();
        }else {
            invalid.innerText = "invalid pin please try agian."
            output.value = "";
            thePin = "";
        }
        if (password.search(/[A-Z]/) < 0) {
            invalid.innerText = "No letters in the pin."
        }
    }
};

let people = [
    {
        pin:2134,
        fname:"tom",
        lname:"smith",
        checkings:1234,
        savings:4321
    },
    {
        pin:3434,
        fname:"sam",
        lname:"gray",
        checkings:1235,
        savings:5321
    },
    {
        pin:1134,
        fname:"troy",
        lname:"sanders",
        checkings:1237,
        savings:7321
    },
    {
        pin:1415,
        fname:"randy",
        lname:"smith",
        checkings:1237,
        savings:5678
    },
    {
        pin:1001,
        fname:"robert",
        lname:"sanders",
        checkings:1237,
        savings:66
    },
    {
        pin:1738,
        fname:"fetty",
        lname:"wap",
        checkings:1738,
        savings:5500
    },
    {
        pin:2853,
        fname:"marquez",
        lname:"evens",
        checkings:1500,
        savings:5000
    },
    {
        pin:8418,
        fname:"michael",
        lname:"babbit",
        checkings:1075,
        savings:1575
    },

];

function mainS() {
    withdrawalD.style.display = "none"
    depositD.style.display = "none"
    loginD.style.display = "none"
    mainScreenD.style.display = "block"
    thanks[0].innerText = "";
    thanks[1].innerText = "";
    take.addEventListener("click",function () {
        withdrawal();
    });
    putIn.addEventListener("click",function () {
        deposit();
    });
};

function withdrawal() {
    mainScreenD.style.display = "none"
    withdrawalD.style.display = "block"
    checkingsD[0].innerText = `checkings:$${people[p].checkings}`
    savingsD[0].innerText = `savings:$${people[p].savings}`
};

function calcWithdrawal() {
    amount = document.getElementById("amountW").value;
    if (amount.includes('-') || amount.includes("e")){
        thanks[0].innerText = "Negative numbers not allowed";
    } else {
        // let oldTotal = people[i].balance
        if (amount > 800) {
            amount = 0;
            thanks[0].innerText = "You have withdrawal over the limit of $800";
        } else {
            if ((checkingsC).checked) {
                let total = (people[p].checkings) - Number(amount);
                thanks[0].innerText = `You withdrawal $${amount} out your checking account your new balance is $${total} have a nice day.`
                people[p].checkings = total;
                
            }else {
                let total = (people[p].savings) - Number(amount);
                thanks[0].innerText = `You withdrawal $${amount} out your savings account your new balance is $${total} have a nice day.`
                people[p].savings = total;
            }
        };
        checkingsB.innerText =`checking:$${people[p].checkings}`
        savingsB.innerText =`savings:$${people[p].savings}`
        return
    };
};

function deposit() {
    mainScreenD.style.display = "none"
    depositD.style.display = "block"
    checkingsD[1].innerText = `checking:$${people[p].checkings}`
    savingsD[1].innerText = `savings:$${people[p].savings}`
};

function calcDeposit() {
    amount = document.getElementById("amountD").value
    if (amount.includes('-') || amount.includes("e")){
        thanks[1].innerText = "Negative numbers not allowed";
    } else {
        // let oldTotal = people[i].balance
        console.log("yes");
        if ((checkingD).checked) {
            
            let total = (people[p].checkings) + Number(amount);
            thanks[1].innerText = `You Deposit $${amount} into your checking account your new balance is $${total} have a nice day.`
            people[p].checkings = total;
            
        }else {
            console.log("no");
            
            let total = (people[p].savings) + Number(amount);
            thanks[1].innerText = `You Deposit $${amount} into your savings account your new balance is $${total} have a nice day.`
            people[p].savings = total;
        }
        checkingsB.innerText =`checking:$${people[p].checkings}`
        savingsB.innerText =`savings:$${people[p].savings}`
        return
    }
};

function logout() {
    withdrawalD.style.display = "none"
    depositD.style.display = "none"
    mainScreenD.style.display = "none"
    loginD.style.display = "block"
    invalid.innerText = "";
    thanks.innerText = "";
};

//canvas
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth-6;
canvas.height = window.innerHeight-6;
var c = canvas.getContext("2d");
var maxRadius = 40;

var colorArray = [
    "#ABE188",
    "#7BC950",
    "#629460",
    "#62A87C",
    "#388659",
];

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 4, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius) {
            this.dx = -this.dx;
        }
        
        if (this.y + this.radius > innerHeight|| this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    };
};

var circleArray = [];

for (let i = 0; i < 1900; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
        
    }
}
animate();