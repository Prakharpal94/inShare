const File = require('./models/file');
const fs = require('fs');
const connectDB = require('./config/db.js');
connectDB();

async function DeleteData() {
    const pastDate = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const files = await File.find({ createdAt: { $lt: pastDate } })
    if(files.length){
        for(const file of files){
            try {
                fs.unlinkSync(file.path);
                await file.remove();
                console.log(`successfully deleted ${file.filename}`);
            } catch (err) {
                console.log(`Error while deleting file ${err}`);
            }
        }
    }
    console.log('job done!');
}

DeleteData().then(process.exit);