const User = require('../../models/User')
module.exports = (app) => {
    // app.get('/api/counters', (req, res, next) => {
    //   Counter.find()
    //     .exec()
    //     .then((counter) => res.json(counter))
    //     .catch((err) => next(err));
    // });
  
    // app.post('/api/counters', function (req, res, next) {
    //   const counter = new Counter();
  
    //   counter.save()
    //     .then(() => res.json(counter))
    //     .catch((err) => next(err));
    // });

    // Sign up
    app.post('/api/account/signup',(req,res,next)=>{
        const{body} = req;
        const{
            firstName,
            lastName,
            email,
            password
        }=body;

        if(!firstName){
            res.end({
                success: false,
                message: 'Error: First name cannot be blank.'
            });
        }
        if(!lastName){
            res.end({
                success: false,
                message: 'Error: Last name cannot be blank.'
            });
        }
        if(!email){
            res.end({
                success: false,
                message: 'Error:email cannot be blank.'
            });
        }
        if(!password){
            res.end({
                success: false,
                message: 'Error:password cannot be blank.'
            });
        }

        email = email.toLowerCase();

        // Steps:
        // 1. Verify email doesn't exist
        // 2. Save
        User.find({
            email: email,
        }, (err,previousUsers) => {
            if (err){
                res.end('Error: Server error');
            }else if(previousUsers.length>0){
                res.end('Error: Account already exist.')
            }
            }
        })
    });
};