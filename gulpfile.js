const gulp = require("gulp");
const vfs = require("vinyl-fs");
const { exec } = require("node:child_process");

const paths = {
    scripts: {
        src: [
            "src/**/*.ts",
            "src/**/*.tsx",
            "!src/**/*.d.ts",
        ],
        watch: ["src/**/*.ts", "src/**/*.tsx"],
        dest: "dist/",
    },
    styles: {
        src: "src/style/tailwind.tw.css", // Tailwind is using exec and only accepts string, not string[]
        watch: ["src/**/*.tw.css", "src/**/*.html"],
        dest: "dist/style/tailwind.tw.css", // Tailwind is using exec and only accepts string, not string[]
    },
    copy: {
        src: [
            "src/**/*",
            "!src/**/*.ts",
            "!src/**/*.tsx",
            "!src/**/*.tw.css",
        ],
        watch: [
            "src/**/*",
            "!src/**/*.ts",
            "!src/**/*.tsx",
            "!src/**/*.tw.css",
        ],
        dest: "dist/",
    },
}

const stdHandler = (err, stdout, stderr) => {
    if (err) {
        console.error(err);
    }
    console.log(stdout);
    console.error(stderr);
};

// Compile TS
gulp.task("ts:build", () => {
    return exec(`
        yarn webpack --config webpack.config.js
        `.trim(), stdHandler)
});
// Watch TS
gulp.task("ts:watch", () => {
    return gulp.watch(paths.scripts.watch, gulp.series("ts:build"));
});

// Compile tailwindcss
gulp.task("tailwind:build", () => {
    return exec(`
        npx @tailwindcss/cli -i ${paths.styles.src} -o ${paths.styles.dest} -m
        `.trim(), stdHandler);
});
// Watch tailwindcss
gulp.task("tailwind:watch", () => {
    return gulp.watch(paths.styles.watch, gulp.series("tailwind:build"));
});

// Copy src
gulp.task("copy:build", () => {
    return gulp
        .src(paths.copy.src)
        .pipe(vfs.dest(paths.copy.dest));
});
// Watch src
gulp.task("copy:watch", () => {
    return gulp.watch(paths.copy.watch, gulp.series("copy:build"));
});

// Global build
gulp.task("build", gulp.parallel("ts:build", "tailwind:build", "copy:build"));

// Global watch
gulp.task("dev", () => {
    gulp.series(
        "build",
        gulp.parallel("ts:watch", "tailwind:watch", "copy:watch"),
    )();
});