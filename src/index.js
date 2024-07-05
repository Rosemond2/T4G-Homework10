let name=prompt(`what is your name`); //taking users age
let age=prompt(`tell us your age`);//taking users age
let email=prompt(`what is your email`);//taking users email
if(age < 12){//checking if the user is less than 12
    alert(`Hi ${name} you are ${age} years old and you are too young to register. sorry😔☹`);
} else if (age > 12 && age < 18){//checking if user is between 12 and 18
    alert(`Hi ${name}, you are ${age} years old and you have limited options to register. We will keep in touch via ${email}🙋‍♀️👋`);
}
else if (age == 18 || age > 18){//checking if user is 18 or above
     alert(`Hi ${name}, you are ${age} years old and you have unlimited options to register. You are eligible to discounted offers and we will keep in touch via ${email}🌺👋`);
}
else {
    alert(`You must be ${age} years old. Welcome`);
}
// let name=prompt(`What is your name`);
// let content= prompt(`message);
// let hey=document.getelementById(`hey)