import { Router } from 'express';
const router = Router();

router.get('/', (req,res) => {
    res.send('Buenas mi gente');
})

export default router;