class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  proviteFeedback() {
    console.log(`${this.name} thank you your feedback.`);
  }
}

class Instructor extends TeamMember {
  designation = "web course Instructor";
  team = "web team";

  constructor(name, location) {
    super(name, location);
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

class Developer extends TeamMember {
  designation = "web course instructor";
  team = "web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`please develop the feature ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JObPlacement extends TeamMember {
  designation = "job pleacement comondo";
  team = "job placement";
  region;
  constructor(name, location, region) {
    super(name,location);
    this.region = region;
  }
  team = "web team";
  provideResume(feature) {
    console.log(`please develop the feature ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

const julhas = new Developer("julhas jb"," Dhaka", "React");
console.log(julhas);
julhas.proviteFeedback()

const bithi = new JObPlacement('Bithi', 'Dhaka', 'Bangladesh')
console.log(bithi);