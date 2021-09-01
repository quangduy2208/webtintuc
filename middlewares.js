import routes from "./routes";


export const localsMiddleware = (req,res,next) =>{
  res.locals.siteName = "DuyTube";
  res.locals.routes = routes
  
  next();
};