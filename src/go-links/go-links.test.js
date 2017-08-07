import {GoLinks} from './';

describe('GoLinks', () => {
	it('should be instantiable', () => {
		expect(new GoLinks()).toBeTruthy();
	});
	it('should set', () => {
		let goLinks = new GoLinks();
		goLinks.set('test', 'https://www.google.com');
		expect(goLinks.links.size).toBe(1);
	});
	it('should delete', () => {
		let goLinks = new GoLinks();
		goLinks.set('test', 'https://www.google.com');
		goLinks.set('test2', 'https://www.google.com');
		goLinks.delete('test');
		expect(goLinks.links.size).toBe(1);
	});
});
