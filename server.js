const express = require('express')
const path = require('path')
const app = express()

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')))

// Redirect all routes to index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Port from Railway
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
