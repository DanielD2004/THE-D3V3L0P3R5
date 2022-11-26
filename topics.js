function topics(i){
  if (i == 1){
    return topic1()
  }
  if (i == 2){
    return topic2()
  }
  if (i == 3){
    return topic3()
  }
  if (i == 4){
    return topic4()
  }
  if (i == 5){
    return topic5()
  }
  if (i == 6){
    return topic6()
  }
}

function topic1(){  
  let animals = [
        {name: "tiger", link: "/images/animals/tiger.png"},
        {name: "elephant", link: "/images/animals/elephant.png"},
        {name: "cat", link: "/images/animals/cat.png"},
        {name: "dog", link: "/images/animals/dog.png"},
        {name: "zebra", link: "/images/animals/zebra.png"},
        {name: "lion", link: "/images/animals/lion.png"},
        {name: "monkey", link: "/images/animals/monkey.png"},
        {name: "cheetah", link: "/images/animals/cheetah.png"},
        {name: "gorilla", link: "/images/animals/gorilla.png"}]
    return animals;
}

function topic2(){  
  let heroes = [
        {name: "superman", link: "/images/superman.png"},
        {name: "batman", link: "/images/batman.png"},
        {name: "ironman", link: "/images/ironman.png"},
        {name: "spiderman", link: "/images/spiderman.png"},
        {name: "hulk", link: "/images/hulk.png"},
        {name: "antman", link: "/images/antman.png"},
        {name: "thor", link: "/images/thor.png"},
        {name: "wolverine", link: "/images/wolverine.png"},
        {name: "hawkeye", link: "/images/hawkeye.png"}]
    return heroes;
}

function topic3(){  
  let places = [
        {name: "california", link: "/images/california.png"},
        {name: "toronto", link: "/images/toronto.png"},
        {name: "orlando", link: "/images/orlando.png"},
        {name: "mexico", link: "/images/mexico.png"},
        {name: "paris", link: "/images/paris.png"},
        {name: "jamaica", link: "/images/jamaica.png"},
        {name: "argentina", link: "/images/argentina.png"},
        {name: "norway", link: "/images/norway.png"},
        {name: "vancouver", link: "/images/vancouver.png"}]
    return places;
}

function topic4(){  
  let sports = [
        {name: "baseball", link: "/images/baseball.png"},
        {name: "soccer", link: "/images/soccer.png"},
        {name: "hockey", link: "/images/hockey.png"},
        {name: "basketball", link: "/images/basketball.png"},
        {name: "curling", link: "/images/curling.png"},
        {name: "boxing", link: "/images/boxing.png"},
        {name: "tennis", link: "/images/tennis.png"},
        {name: "volleyball", link: "/images/volleyball.png"},
        {name: "weightlifting", link: "/images/weightlifting.png"}]
    return sports;
}

function topic5(){  
  let cars = [
        {name: "bugatti", link: "/images/bugatti.png"},
        {name: "lamborghini", link: "/images/lamborgini.png"},
        {name: "audi", link: "/images/audi.png"},
        {name: "ferrari", link: "/images/ferrari.png"},
        {name: "maserati", link: "/images/maserati.png"},
        {name: "honda", link: "/images/honda.png"},
        {name: "toyota", link: "/images/toyota.png"},
        {name: "volkswagon", link: "/images/volkswagon.png"},
        {name: "porsche", link: "/images/porsche.png"}]
    return cars;
}

function topic6(){  
  let foods = [
        {name: "sushi", link: "/images/sushi.png"},
        {name: "hamburger", link: "/images/hamburger.png"},
        {name: "salad", link: "/images/salad.png"},
        {name: "pizza", link: "/images/pizza.png"},
        {name: "cereal", link: "/images/cereal.png"},
        {name: "donut", link: "/images/donut.png"},
        {name: "bacon", link: "/images/bacon.png"},
        {name: "cake", link: "/images/cake.png"},
        {name: "fries", link: "/images/fries.png"}]
    return foods;
}