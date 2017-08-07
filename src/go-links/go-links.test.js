import {GoLinks} from './';

describe('GoLinks', () => {
	it('should be instantiable', () => {
		expect(new GoLinks()).toBeTruthy();
	});
	it('should set', () => {
		let goLinks = new GoLinks();
		goLinks.set('jazeee', 'http://www.jazeee.com');
		expect(goLinks.links.size).toBe(1);
	});
	it('should get', () => {
		let goLinks = new GoLinks();
		goLinks.set('jazeee', 'http://www.jazeee.com');
		expect(goLinks.links.get('jazeee')).toBe('http://www.jazeee.com');
	});
	it('should update', () => {
		let goLinks = new GoLinks();
		goLinks.set('jazeee', 'http://www.jazeee.com');
		goLinks.set('jazeee', 'http://www.jazeee.com/new');
		expect(goLinks.links.get('jazeee')).toBe('http://www.jazeee.com/new');
	});
	it('should delete', () => {
		let goLinks = new GoLinks();
		goLinks.set('jazeee', 'http://www.jazeee.com');
		goLinks.set('jazeee2', 'http://www.jazeee.com/2');
		goLinks.delete('jazeee');
		expect(goLinks.links.size).toBe(1);
		expect(goLinks.links.get('jazeee')).toBeUndefined();
		expect(goLinks.links.get('jazeee2')).toBe('http://www.jazeee.com/2');
	});
});
