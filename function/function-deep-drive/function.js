/**
* @Function Deep Drive
*/

/**
* Daily @Human Lifecycle
* Human name
* awake from sleep
* go to washroom
* take a breakfast
* go to office/school/college
* come back to home
* take a dinner
* go to sleep
*/

// Name: Sleep
// Param: Name
// Definition: How to sleep

function sleep(name){
    console.log(`${name} is sleeping`);
}

// Name: Awake
// Param: Name, Time
// Definition: How to awake

function awake(name, time){
    console.log(`${name} is awake at ${time}`);
}


// Name: Eat
// Param: Name, Time
// Definition: How to eat

function eat(name, time){
    console.log(`${name} is eating ${time}`);
}

// Name: Walk
// Param: Name, Destination
// Definition: How to walk

function walk(name, destination){
    console.log(`${name} is walking to ${destination}`);
}

// Name: Study
// Param: Name, Subject
// Definition: How to study

function study(name, subject){
    console.log(`${name} is studying ${subject}`);
}

// Name: Work
// Param: Name, Job
// Definition: How to work

function work(name, job){
    console.log(`${name} is working as ${job}`);
}




// Function: Student_Daily_Life

// Param: Name
// - Awake -> Name
// - Eat -> name, 'Breakfast'
// - Walk -> name, 'School'
// - Study -> name, 'Math'
// - Eat -> name, 'Dinner'
// - Sleep -> name

// function studentDailyLife(name){
//     awake(name, '8:00 AM');
//     eat(name, 'Breakfast');
//     walk(name, 'School');
//     eat(name, 'Lunch');
//     study(name, 'Math');
//     walk(name, 'home');
//     eat(name, 'Dinner');
//     study(name, 'Design');
//     sleep(name);
// }

// console.log('------------------------------------');
// studentDailyLife('Ashis');
// console.log('------------------------------------');
// studentDailyLife('Asis');



// Function: Job_Holder_Daily_Life

// Param: Name, Job
// - Awake -> Name
// - Eat -> name, 'Breakfast'
// - Walk -> name, 'Office'
// - Work -> name, job
// - Eat -> name, 'Lunch'
// - Walk -> name, 'home'
// - Eat -> name, 'Dinner'
// - Sleep -> name

// function jobHolderDailyLife(name, job){
//     awake(name, '8:00 AM');
//     eat(name, 'Breakfast');
//     walk(name, 'Office');
//     work(name, job);
//     eat(name, 'Lunch');
//     walk(name, 'home');
//     eat(name, 'Dinner');
//     sleep(name);
// }

// jobHolderDailyLife('Ashis', 'Frontend Developer');
// console.log('------------------------------------');
// jobHolderDailyLife('Asis', 'Backend Developer');



// Function: Remote_Worker_Daily_Life

// Param: Name, Job
// - Awake -> Name
// - Eat -> name, 'Breakfast'
// - Work -> name, job
// - Eat -> name, 'Dinner'
// - Sleep -> name


// There are two steps 
// - Define a function
// - Invoke/Call a function


// Define a function
// function testFunction(a=10, b=10){
//     console.log(b)
//     const result = a + b + Math.max(a, b);
       // result = 10 + 5 + 10
//     console.log(b)
//     console.log(result);
// }

// Invoke/Call a function
// testFunction(10, 20);
// testFunction(100, 200);
// testFunction(1000, 2000);
// testFunction();
// testFunction();
// testFunction(b=5);

// ! Underscore can be used as a parameter not to use it a argument



