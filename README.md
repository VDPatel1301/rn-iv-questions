# 📱 RN_IV_Questions - React Native Expo App

This is a React Native + TypeScript project built with Expo SDK 53. It includes 3 core screens to demonstrate UI logic, form validation, navigation, and code modularity.

---

## 📦 Features

### 1️⃣ Calculator Screen
- Add two numbers
- Validates empty input before calculating
- Uses custom reusable `CustomInput` and `Button` components
- Validates:
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
│ └── TwoSumScreen.tsx
└── shared/ # Constants and theme
├── colors.ts
└── constants.ts


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rn-iv-questions.git
cd rn-iv-questions

2. Install dependencies

npm install

3. Start the app

npx expo start

📱 Scan the QR code using Expo Go

🧪 Testing (Jest + RTL)
This project includes unit tests using Jest and React Native Testing Library.

✅ Setup (Already done)
jest

@testing-library/react-native

@testing-library/jest-native

react-test-renderer@19.0.0

✅ Run tests

npm test

✅ Run specific test file

npx jest __tests__/CalculatorScreen.test.tsx
