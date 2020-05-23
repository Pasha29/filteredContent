const express = require('express');
const router = express.Router();
const specificContent = require('./specificContent');

router.get('/content', (req, res) => {
    specificContent.find({}).then( response => {
        res.send(response);
    })
})

router.post('/content', (req, res) => {
    specificContent.create(req.body).then( response => {
        res.send(response);
    });
})

router.put('/content/:id', (req, res) => {
    specificContent.findByIdAndUpdate({_id: req.params.id}, req.body).then( () => {
        specificContent.findOne({_id: req.params.id}).then( (response) => {
            res.send(response);
        })
    })
})

router.delete('/content/:id', (req, res) => {
    specificContent.deleteOne({_id: req.params.id}).then( (response) => {
        res.send(response);
    })
})

module.exports = router;