import { createPiece } from '@activepieces/pieces-framework';
import { newLead } from './lib/triggers/new-lead';
import { PieceCategory } from '@activepieces/shared';

export const poper = createPiece({
	displayName: 'Poper',
	auth: undefined,
	minimumSupportedRelease: '0.20.0',
	categories: [PieceCategory.MARKETING],
	description:
		'AI Driven Pop-up Builder that can convert visitors into customers,increase subscriber count, and skyrocket sales.',
	logoUrl: 'https://cdn.activepieces.com/pieces/poper.png',
	authors: ['thirstycode'],
	actions: [],
	triggers: [newLead],
});
