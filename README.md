# 📱 RN_IV_Questions - React Native Expo App

This is a React Native + TypeScript project built with Expo SDK 53. It includes 3 core screens to demonstrate UI logic, form validation, navigation, and code modularity.

---

## 📦 Features

### 1️⃣ Calculator Screen
- Add two numbers
- Validates empty input before calculating
- Uses custom reusable `CustomInput` and `Button` components
- Input validation with **Zod** + `react-hook-form`

### 2️⃣ Two Sum Screen
- Accepts dynamic number inputs
- Adds numbers to a list (with delete support)
- Finds two numbers that sum to a target using the **Two Pointer** technique
- Modular components: `NumberInput`, `NumberList`, `ResultDisplay`

### 3️⃣ Navbar Screen
- Contains a brand title using link (`Linking` or `window.location`)
- Search input (UI only, no actual search function)
- Hamburger menu toggles open/close (`☰ ↔ ✕`)
- Basic mobile-friendly layout


## 🖼️ Image Asset Handling with Centralized Icon.ts

- Images are organized centrally using an interface for type-safe access:

- ✅ Keeps your image references type-safe and consistent.


## ✨ Custom Splash Screen with Fade-in Animation

- We use a custom splash screen component that fades in the logo and transitions to the main app after 3 seconds.

---

## 🧠 Tech Stack

- **React Native** (via [Expo SDK 53](https://docs.expo.dev/versions/latest/))
- **TypeScript**
- **Zod** – schema validation
- **react-hook-form** – form state management
- **Jest** – testing framework
- **React Native Testing Library (RTL)** – component testing

---

## 📁 Folder Structure

rn-iv-questions-main/
├── App.tsx # Root component with screen navigation
├── package.json
├── tsconfig.json
├── jest.config.js
├── .gitignore
├── README.md
├── assets/
│ └── company-logo.png # Logo for splash and UI usage
├── tests/ # All test files
│ ├── App.test.tsx
│ ├── CalculatorScreen.test.tsx
│ └── TwoSumScreen.test.tsx
└── src/
├── components/ # Reusable UI components
│ ├── CustomButton.tsx
│ ├── CustomInput.tsx
│ ├── NumberInput.tsx
│ ├── NumberList.tsx
│ └── ResultDisplay.tsx
├── schemas/ # Zod schema files
│ └── numberInputSchema.ts
├── screens/ # App screens
│ ├── CalculatorScreen.tsx
│ ├── NavbarScreen.tsx
│ ├── TwoSumScreen.tsx
│ └── SplashScreen.tsx
└── shared/ # Constants and theme
├── colors.ts
├── constants.ts
└── allIcons/
└── Icon.ts # Custom image registry


---

## 🚀 Getting Started

### 1. Clone the repository

- git clone https://github.com/your-username/rn-iv-questions.git

- cd rn-iv-questions

### 2. Install dependencies

- npm install

### 3. Start the app

- npx expo start

### 📱 Scan the QR code using Expo Go

## 📱 Manual Platform Launch (CLI)

✅ Android

- npm run android

✅ iOS (Mac only)

- npm run ios

✅ Web

- npm run web


### 🧪 Testing (Jest + RTL)

- This project includes unit tests using Jest and React Native Testing Library.

### ✅ Run tests

- npm test

### ✅ Run specific test file

- npx jest __tests__/CalculatorScreen.test.tsx


## ⚙️ Continuous Integration (CI) – GitHub Actions

This project uses **GitHub Actions** to automate continuous integration tasks. The workflow is defined in `.github/workflows/ci.yml`.

### ✅ What It Does

On every push or pull request to the `main` branch, the workflow:

1. **Checks out the code**
2. **Sets up Node.js environment**
3. **Installs project dependencies**
4. **Runs TypeScript type checking**
5. **Runs unit and integration tests using Jest**

### 🔍 CI Tools Used
- **GitHub Actions** – For running workflows on every push/PR
- **jest-expo** – To run tests in a React Native + Expo environment
- **@testing-library/react-native** – For writing and testing UI behavior

### 🛠️ Related Scripts in `package.json`

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "test": "jest"
}

