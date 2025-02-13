const gulp = require("gulp");
const vfs = require("vinyl-fs");
const sass = require("gulp-sass")(require("sass"));
const ts = require("gulp-typescript");
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
    return gulp.src("./src/**/*.ts")
        .pipe(ts.createProject("tsconfig.json")())
        .pipe(vfs.dest("./dist"));
});
// Watch TS
gulp.task("ts:watch", () => {
    return gulp.watch("./src/**/*.ts", gulp.series("ts:build"));
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

// Compile tailwindcss
gulp.task("tailwind:build", () => {
    return exec(`
        npx @tailwindcss/cli -i ./src/style/tailwind.tw.css -o ./dist/style/tailwind.tw.css
        `.trim(), stdHandler);
});
// Watch tailwindcss
gulp.task("tailwind:watch", () => {
    return gulp.watch("./src/style/tailwind.tw.css", gulp.series("tailwind:build"));
});

// Copy src
gulp.task("copy:build", () => {
    return gulp.src([
        "./src/**/*",
        "!./src/**/*.ts",
        "!./src/**/*.scss",
        "!./src/style/tailwind.tw.css",
    ]).pipe(vfs.dest("./dist"));
});
// Watch src
gulp.task("copy:watch", () => {
    return gulp.watch([
        "./src/**/*",
        "!./src/**/*.ts",
        "!./src/**/*.scss",
        "!./src/style/tailwind.tw.css",
    ], gulp.series("copy:build"));
});

// Global build
gulp.task("build", gulp.parallel("ts:build", "scss:build", "tailwind:build", "copy:build"));

// Global watch
gulp.task("dev", () => {
    gulp.series(
        "build",
        gulp.parallel("ts:watch", "scss:watch", "tailwind:watch", "copy:watch"),
    )();
});