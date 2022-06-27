import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './router.js'

const PORT = 5000

const DB_URL = `mongodb+srv://root:12345@cluster0.aaovaqq.mongodb.net/?retryWrites=true&w=majority`

const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

app.use('/api', router)

const startApi = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        app.listen(PORT, () => console.log('Server started ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
startApi()