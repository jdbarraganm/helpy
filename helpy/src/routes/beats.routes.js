import { Router } from 'express'

const router = Router();

//Db connection

import { connect } from '../database'
import { ObjectID } from 'mongodb'


router.get('/', async (req, res) => {
    const db = await connect(); 
    const result = await db.collection( 'beats').find({}).toArray();
    console.log(result);
     
    res.json(result);
})

router.post('/', async (req, res) => {
    const db = await connect();
    const beat = {
        user: req.body.user,
        date: Date(),
        beat: req.body.beat
    }
    const result = await db.collection('beats').insert(beat);
    res.json(result);
    
    res.json('Beat posted');
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('beats').findOne({ _id: ObjectID(id) });
    res.json(result);
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('beats').findOneAndDelete({ _id: ObjectID(id) });
    res.json({
        message: 'Task ${id} deleted',
        result
    });
})

///db.beats.find( { "date": { $gte: new Date("Mon Jan 06 2020 22:08:29 GMT-0500 (GMT-05:00)").toISOString() } } ).limit(3)

export default router;