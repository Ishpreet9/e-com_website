import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

router.use('/images',express.static(path.join(_dirname,'../public/images')));

export default router;