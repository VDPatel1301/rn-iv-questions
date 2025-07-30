# 📱 RN_IV_Questions - React Native Expo App

This is a React Native + TypeScript project built with Expo SDK 53. It includes 3 core screens to demonstrate UI logic, form validation, navigation, and code modularity.

---

## 📦 Features

### 1️⃣ Calculator Screen
- Add two numbers
- Validates empty input before calculating
- Uses custom reusable `CustomInput` and `Button` components

### 2️⃣ Two Sum Screen
- Accepts dynamic number inputs
- Adds numbers to a list (with delete support)
- Finds two numbers that sum to a target using the **Two Pointer** technique
- Validates:
  - At least 2 numbers before enabling "Find Indices"
  - Input validation with **Zod** + `react-hook-form`
- Modular components: `NumberInput`, `NumberList`, `ResultDisplay`

### 3️⃣ Navbar Screen
- Contains a brand title using link (`Linking` or `window.location`)
- Search input (UI only, no actual search function)
- Hamburger menu toggles open/close (`☰ ↔ ✕`)
- Basic mobile-friendly layout

---

## 🧠 Tech Stack

- **React Native** (Expo SDK 53)
- **TypeScript**
- **Zod** + `react-hook-form` + `@hookform/resolvers/zod`
- **Platform API** for Web & Mobile support

---

## 📁 Folder Structure

rn-iv-questions-main/
├── App.tsx # Root component with screen navigation
├── package.json
├── tsconfig.json
├── .gitignore
├── README.md
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


npm install


npx expo start

Scan QR code using Expo Go
