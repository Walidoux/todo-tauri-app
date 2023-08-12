module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(!process.env.TAURI_DEBUG ? { cssnano: { preset: 'advanced' } } : {})
  }
}
