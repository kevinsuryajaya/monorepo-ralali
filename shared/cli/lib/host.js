const HOST = process.env.HOST || '0.0.0.0'
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000

module.exports = {
  HOST,
  DEFAULT_PORT,
}
