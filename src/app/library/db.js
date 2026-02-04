const { MONGO_USER, MONGO_PASS } = process.env;

export const connectionString = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.phxtzzg.mongodb.net/restoBD?retryWrites=true&w=majority`;
