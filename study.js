var person={
    firstName:"Pamela",
    lastName:"Umutoni",
    language:"en",
    get lang(){
        return this.language;
    }
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.language);
var school={
    name:"AkiraChix",
    classes:"Lovelace,Lisa,AnitaB",
    language:"ken",
    get lang(){
        return this.language;
    }   
}
console.log(school.classes);
console.log(school.language);
var country={
    name:"Rwanda",
    citizen:"Rwandan",
    language:"",
    set lang(lang){
        return this.language=lang;
    }
}
console.log(country.name);
console.log(country.citizen);
console.log(country.lang="Kiny");
var person={
    firstName:"Juliet",
    lastName:"Mbabazi",
    language:"",
    set lang(lang){
    return this.language=lang;
}
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.lang="fren");