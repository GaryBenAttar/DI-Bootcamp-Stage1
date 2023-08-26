// Instructions

// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:

// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)

// Create a method called watch() which displays a string as follows:

// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time}s of ${this.title}`);
  }
}

const firstFilm = new Video("Matrix", "Vailorg", 126 * 60);
firstFilm.watch();

const secondFilm = new Video("Harry Potter", "Elkronig", 106 * 60);
secondFilm.watch();

const filmMarathon = [
  ["Film 1", "Watcher 1", 75 * 60],
  ["Film 2", "Watcher 2", 178 * 60],
  ["Film 3", "Watcher 3", 82 * 60],
  ["Film 4", "Watcher 4", 91 * 60],
  ["Film 5", "Watcher 5", 34 * 60],
];

filmMarathon.forEach((e) => {
  const film = new Video(...e);
  film.watch();
});
