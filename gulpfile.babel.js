import gulp from 'gulp';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import del from 'del';

export const clean = () => del([
  'localization/spanish',
  'localization/french',
  'localization/german',
  'localization/korean',
  'localization/simp_chinese',
  '../build/**/*'
],{force: true});

function cloneLangs(){
  return gulp.src('localization/english/acs_traits_l_english.yml')

  .pipe(rename('acs_traits_l_spanish.yml'))
  .pipe(replace('l_english', 'l_spanish'))
  .pipe(gulp.dest('localization/spanish/'))

  .pipe(rename('acs_traits_l_french.yml'))
  .pipe(replace('l_spanish', 'l_french'))
  .pipe(gulp.dest('localization/french/'))

  .pipe(rename('acs_traits_l_german.yml'))
  .pipe(replace('l_french', 'l_german'))
  .pipe(gulp.dest('localization/german/'))

  .pipe(rename('acs_traits_l_korean.yml'))
  .pipe(replace('l_german', 'l_korean'))
  .pipe(gulp.dest('localization/korean/'))

  .pipe(rename('acs_traits_l_russian.yml'))
  .pipe(replace('l_korean', 'l_russian'))
  .pipe(gulp.dest('localization/russian/'))

  .pipe(rename('acs_traits_l_simp_chinese.yml'))
  .pipe(replace('l_russian', 'l_simp_chinese'))
  .pipe(gulp.dest('localization/simp_chinese/'))
}

function copyModFiles(){
  return gulp.src(['common/**/*', 'events/**/*', 'gfx/**/*', 'localization/**/*', 'descriptor.mod', 'thumbnail.jpg'], {base: '.'})
  .pipe(gulp.dest('../build/'))
}

const build = gulp.series(clean, cloneLangs, copyModFiles);

exports.default = build
