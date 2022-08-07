const express = require('express');
const router = express.Router();
const VocabCardModel = require('../models/VocabCardModel')

router.post('/vocab', async (req, res) => {
    try {
        const addCard = VocabCardModel(req.body);
        const insertCard = await addCard.save();
        res.status(201).send(insertCard);
    } catch (error) {
        res.status(400).send(error);
    } 
})
   
router.get('/vocab', async (req, res) => { 
    try {
        const getAllVocabData = await VocabCardModel.find({});
        res.send(getAllVocabData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/vocab/:id', async (req, res) => { 
    try {
        const _id = req.params.id;
        const getIndividualVocabData = await VocabCardModel.findById({_id}); 
        res.send(getIndividualVocabData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.patch('/vocab/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateVocabData = await VocabCardModel.findByIdAndUpdate(_id, req.body, {new: true}); 
        res.send(updateVocabData);        
    } catch (error) {
        res.status(500).send(error);
    }
})

router.delete('/vocab/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteVocabData = await VocabCardModel.findByIdAndDelete(_id); 
        res.send(deleteVocabData);                
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;