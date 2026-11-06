# WeatherGPT Enhanced

Beginner-friendly weather website using HTML, CSS, and JavaScript.

## Features
- Search for cities and supported place names.
- Popular Tamil Nadu city and tourist shortcuts, plus campus shortcuts for Saveetha, Anna University, IIT Madras, SRM Kattankulathur, VIT Vellore, PSG Tech, Thiagarajar College, NIT Trichy, Sathyabama, SSN, and St Joseph's Institute of Technology.
- Current temperature, feels-like temperature, humidity, wind speed, condition, and a two-day forecast for chatbot answers.
- English, Tamil, and Hindi interface text and basic multilingual chatbot keyword matching.
- Voice search where the browser supports Web Speech Recognition.
- Text-to-speech weather summary where speech synthesis is available.
- Responsive desktop/mobile layout; no account, database, API key, or package install.

## Run in VS Code
1. Extract this ZIP.
2. Open the `WeatherGPT-Enhanced` folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server** (if installed), or open `index.html` in a modern browser.
4. Keep internet access on for live geocoding and weather data.

If Live Server is disabled by Workspace Trust, trust the folder only if you trust its source, then enable the extension.

## APIs
- Open-Meteo Geocoding API: https://geocoding-api.open-meteo.com/v1/search
- Open-Meteo Forecast API: https://api.open-meteo.com/v1/forecast

## Limitations
- Not every college or landmark is indexed. If a place is not found, search for its nearby city or district. Listed college shortcuts use saved approximate campus coordinates, so the weather reflects the campus area and can differ from a weather station exactly on campus.
- Voice recognition varies by browser and may need microphone permission and an internet connection.
- Available spoken voices depend on browser/operating system language support.
- Chatbot is rule-based and only answers a limited set of predefined questions. It is not a generative AI chatbot.
- Educational demo only; not for emergency decisions.

## Files
- `index.html`: page structure
- `style.css`: responsive design
- `script.js`: APIs, translations, voice features, and chatbot
\n\n## Extra chatbot questions\nThe chatbot now uses forecast data to answer questions such as “Will it rain today?”, “Should I carry an umbrella?”, “What about tomorrow?”, “What are today's high and low temperatures?”, “What is the UV index?”, and “When is sunset?”. These are rule-based responses based on the Open-Meteo forecast, not guarantees.\n