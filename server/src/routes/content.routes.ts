import { Router } from 'express';
import { analyzeArticleController, generateContentController } from '../controllers/content.controller';

const router = Router();

router.post('/analyze', analyzeArticleController);
router.post('/generate', generateContentController);

export default router;
