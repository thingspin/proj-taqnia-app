# ThingSPIN App Plugin Development Guide

본 문서는 ThingSPIN에서 사용 가능한 App 플러그인(Panels 또는 Datasources)을 개발하기 위한 기초 가이드를 제공하며, 웹 프론트 개발자를 위한 문서이므로 아래의 사용 기술을 참고하여 개발가이드를 참고하길 권장한다.

또한, 본 플러그인 개발은 AngularJs(1.x) 기반하에 동작되기에, Angular의 사용법을 필수로 알고있어야 한다.

## use Skill

- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Angular 1.x](https://docs.angularjs.org/guide)
- [HTML5](https://www.w3schools.com/html/html5_intro.asp)
- [CSS](https://www.w3schools.com/css/)
- [SASS](https://sass-lang.com/guide)
- [Grunt](https://gruntjs.com/getting-started)
- [Webpack](https://webpack.js.org/concepts/)


## Development Requirement

- [NodeJS LTS](https://nodejs.org/download/)

- [Chrome Browser](https://www.google.com/intl/ko_ALL/chrome/)

## Development Quickstart Guide

1. 제공된 소스의 디렉토리 명을 원하는 App 명으로 수정한다.

   (단, Plugin명은 다른 plugin과 동일해선 안된다.)

2. (optional) [package.json](./package.json) 파일에서 id를 설정한 디렉토리 명과 동일하게 수정한다.
3. [src/plugin.json](./src/plugin.json) 파일에서 id를 설정한 디렉토리 명과 동일하게 수정한다.
4. Build guide를 참조하여 typescript를 컴파일 한다.
5. 빌드된 결과([dist/](./dist/))를 Install guide를 참조하여 ThingSPIN Plugins에 설치한다.
6. ThingSPIN 서버를 재실행한다.
7. ThingSPIN 브라우저 화면에서 (설정 > 플러그인)에서 제작한 App이 추가 되었는지 확인한다.

## Build guide

ThingSPIN Plugin을 빌드하는 방법을 가이드한다.

빌드는 Plugin Root Directory에서 다음과 같이 명령어를 실행한다.

빌드 과정은 [Gruntfile.js](./Gruntfile.js)를 참조하여 빌드한다.

```sh
# 아래의 명령어 최초 한번만 실행하면 된다.
npm install
# Gruntfile.js를 참조하여 빌드한다.
grunt
```

## Auto Build Guide

ThingSPIN Plugin에서 소스를 수정할 때 마다 자동으로 빌드하는 방법을 가이드 한다.

빌드는 Plugin Root Directory에서 다음과 같이 명령어를 실행한다.

빌드 과정은 [Gruntfile.js](./Gruntfile.js)를 참조하여 빌드한다.

```sh
# 아래의 명령어 최초 한번만 실행하면 된다.
npm install
# 소스 파일을 저장할 때 마다 자동으로 재빌드한다.
# Gruntfile.js에 해당 내용이 기재되어 있다.
grunt watch # or yarn watch
```

## install Guide

빌드된 ThingSPIN Plugin javascript 코드를 ThingSPIN에서 동작하기 위해 설치하는 방법을 가이드 한다.

### Step1. Plugin 설치

```text
입력하세요.
```

### Step2. 서버 재시작

```text
ThingSPIN에서는 서버 동작 초기화 단계에서 Plugin 추가 여부를 확인한다.

따라서 Plugin 설치하면 기존에 동작 중인 ThingSPIN에서 추가된 plugin을 확인하지 않으므로 ThingSPIN 서버를재시작할 필요가 있다.

(단, 이미 추가된 plugin의 내용을 수정한 경우 재시작하지 않아도 적용된다.)
```

### Step3. 확인

```text
ThingSPIN에서는 추가된 Plugin은 (설정 > 플러그인)에서 현재 인식된 플러그인 목록을 확인 할 수 있다.
```