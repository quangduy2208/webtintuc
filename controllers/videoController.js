export const home = (req,res) => res.render('home',{pageTitle:"Home"});
export const search = (req,res) =>{

    const {query:{term:searchingBy}}=req;
    
    res.render('Search',{pageTitle:"Search",searchingBy});
    };
export const videos = (req,res) => res.send('Videos');
export const upload = (req,res) => res.send('Upload');
export const videoDetail = (req,res) => res.send('Video detail');
export const editVideo = (req,res) => res.send('Edit Video');
export const deleteVideo = (req,res) => res.send('Delete video');
