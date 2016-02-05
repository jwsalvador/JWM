var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    exec = require("child_process").exec;

gulp.task("serve-dev", function() {
  var options = {
    script: "./src/server/app.js",
    delayTime: 1,
    watch: ["./src/server/app.js"]
  };

  return plugins.nodemon(options);
});

gulp.task("concat", function() {
   gulp.src([
       "./bower_components/angular/angular.js",
       "./bower_components/angular-animate/angular-animate.js",
       "./bower_components/angular-bootstrap/ui-bootstrap.js",
       "./bower_components/angular-ui-router/release/angular-ui-router.js",
       "./bower_components/angular-ui-router/release/angular-ui-router.js",
       "./src/client/app/*.js",
       "./src/client/app/**/*.module.js",
       "./src/client/app/**/*.config.js",
       "./src/client/app/**/*.js",
   ])
   .pipe(plugins.concat("bundle.js"))
   .pipe(gulp.dest("./src/client/assets"));
});

gulp.task("watch", function() {
   gulp.watch([
    "./src/client/app/*.js",
    "./src/client/app/**/*.js"
   ], ["concat"]); 
});