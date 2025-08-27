import { Router } from "express";
import messages from "../db.js";
import { storeMessage, findMessage } from "../controllers/messageController.js";

const messageRouter = Router();

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New" },
];

const name = "Donald Reniff";

messageRouter.get('/', (req, res) => {
    /*
     * Since we’ve already defined the views and view engine app properties,
     * the first argument of res.render is programmed to look for
     * “a template called index in the specified folder.”
     */
    res.render("index", { 
        title: "Mini Messageboard", 
        links: links,
        name: name,
        messages: messages });
});

messageRouter.get('/new', (req, res) => {
    res.render("form");
});

messageRouter.post('/new', storeMessage);

messageRouter.get("/message/:id", findMessage);


export default messageRouter;