export const home = (req, res)=>{
    res.render("index", {
        name: "John"
    });
} 
export const about = (req, res) =>{
    res.send("This is the about page")
}