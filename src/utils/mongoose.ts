import mongoose from 'mongoose'

export const ConnectDB = () => mongoose.connect(process.env.MONGODB_URI || '')