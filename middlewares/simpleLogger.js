export const simpleLogger = (req, res, next) => {
    console.log(`${req.url} - ${req.method} - ${new Date().toISOString()}`)
    const name = req.query.name
    if (name === 'Afridi') {
        return res.json({ message: 'Bad request' })
    }
    next()
    // res.send()
}
