class Instructor {
  name;
  designation = "web course Instructor";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  team = "web team";
  location;
  startSupportSection(time) {
    console.log(`start the suppor session at ${time}`);
  }
  createQuiz(modiule) {
    console.log(`please creat quiz for modiul ${modiule}`);
  }
}

const bithi = new Instructor('bithi','bow bazar');
console.log(bithi);
bithi.startSupportSection("5:00");
bithi.createQuiz(25);
