import messages from '../db.js';
import CustomErrorNotFoundError from '../middleware/CustomNotFoundError.js';

const storeMessage = (req, res) => {
    messages.push({
        id: messages.length + 1, 
        text: req.body.messageText,
        user: req.body.messageUser,
        added: new Date(),
    });

    res.redirect("/");
};

const findMessage = (req, res) => {
    const id = req.params.id;
    const message = messages.find((m) => m.id == id);
    res.render("message", { message: message});
};

// async function getAuthorById(req, res) {
//     const { authorId } = req.params;

//     const author = await db.getAuthorById(Number(authorId));

//     if (!author) {
//         throw new CustomErrorNotFoundError("Author not found.");
//     }

//     res.send(`Author name: ${author.name}`);
// };

export { storeMessage, findMessage };