const catchAsync = (controllers)=>{
    return (req,res,next)=>{
        controllers(req,res).catch((err)=> next(err))
    }
}

module.exports = catchAsync; 