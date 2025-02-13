const gulp = require("gulp");
const vfs = require("vinyl-fs");
const sass = require("gulp-sass")(require("sass"));
const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");

const stdHandler = (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stdout);
    console.error(stderr);
};

// Compile TS
gulp.task("ts:build", () => {
    return exec("tsc", stdHandler);
});
// Watch TS
gulp.task("ts:watch", () => {
    return exec("tsc -w", stdHandler);
});

// Compile SCSS
gulp.task("scss:build", () => {
    return gulp.src("./src/style/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(vfs.dest("./dist/style"));
});
// Watch SCSS
gulp.task("scss:watch", () => {
    return gulp.watch("./src/style/**/*.scss", gulp.series("scss:build"));
});

// Copy src
gulp.task("copy:build", () => {
    return gulp.src([
        "./src/**/*",
        "!./src/**/*.ts",
        "!./src/**/*.scss",
        "!./src/style/tailwind.css",
    ]).pipe(vfs.dest("./dist"));
});
// Watch src
gulp.task("copy:watch", () => {
    return gulp.watch([
        "./src/**/*",
        "!./src/**/*.ts",
        "!./src/**/*.scss",
        "!./src/style/tailwind.css",
    ], gulp.series("copy:build"));
});

// Compile tailwindcss
gulp.task("tailwind:build", () => {
    return exec("npx @tailwindcss/cli -i ./src/style/tailwind.css -o ./dist/style/tailwind.css", stdHandler);
});
// Watch tailwindcss
gulp.task("tailwind:watch", () => {
    return gulp.watch("./src/style/tailwind.css", gulp.series("tailwind:build"));
});

// Global build
gulp.task("build", gulp.parallel("ts:build", "scss:build", "copy:build", "tailwind:build"));

// Global watch
gulp.task("dev", gulp.parallel("ts:watch", "scss:watch", "copy:watch", "tailwind:watch"));