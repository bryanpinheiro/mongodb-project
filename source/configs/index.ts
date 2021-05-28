const HOSTNAME = process.env["HOSTNAME"] as string;
const PORT = parseInt(process.env["PORT"] as string);
const MONGO_URI = process.env["MONGO_URI"] as string;

const MONGO_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export {
    HOSTNAME,
    PORT,
    MONGO_URI,
    MONGO_OPTIONS
}